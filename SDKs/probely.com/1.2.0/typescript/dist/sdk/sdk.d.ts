import { Account } from "./account";
import { APIKeys } from "./apikeys";
import { Archive } from "./archive";
import { Assets } from "./assets";
import { Events } from "./events";
import { Findings } from "./findings";
import { Frameworks } from "./frameworks";
import { Integrations } from "./integrations";
import { JiraCloudIntegration } from "./jiracloudintegration";
import { JiraServerIntegration } from "./jiraserverintegration";
import { Labels } from "./labels";
import { Login } from "./login";
import * as shared from "./models/shared";
import { PasswordReset } from "./passwordreset";
import { Plan } from "./plan";
import { Scans } from "./scans";
import { Scheduled } from "./scheduled";
import { Site } from "./site";
import { SlackIntegration } from "./slackintegration";
import { Statistics } from "./statistics";
import { Targets } from "./targets";
import { Users } from "./users";
import { Vulnerabilities } from "./vulnerabilities";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.probely.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Probely is a Web Vulnerability Scanning suite for Agile Teams. It provides
 *
 * @remarks
 * continuous scanning of your Web Applications and lets you efficiently
 * manage the lifecycle of the vulnerabilities found, in a sleek and
 * intuitive ~~web interface~~ API.
 *
 * ## Quick-Start
 *
 * ### Authentication
 *
 * To use the API, you first need to create a token (API Key).
 * To create a token, select a target from the drop-down list, go to the
 * "Settings" page, and click on the "Integrations" tab.
 *
 * Write a name for the API Key. For example, if you want to use the API Key
 * for travis,
 * you could name it "travis". In this example, we chose "**example.com_key**"
 *
 * ![Creating API key][1]
 *
 *   [1]: assets/qs/create_api_key_1.png
 *
 *
 *
 * The API key was created successfully:
 *
 * ![API key created][2]
 *
 *   [2]: assets/qs/create_api_key_2.png
 *
 *
 * On every request, you need to pass this token in the authorization header,
 * like this:
 *
 *
 * ```yaml
 * Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJBRlNJQlp
 * 3elFsMDEiLCJ1c2VybmFtZSI6IkNIZ2tkSUROdzV0NSJ9.90UwiPGS2hlvgOLktFU0LfKuatNKm
 * mEP79u17VnqT9M
 * ```
 *
 *
 * **WARNING: Treat this token as a password. With this token, you have the
 * power to fully manage the target.**
 *
 * In the following examples, the token will be named as *PROBELY_AUTH_TOKEN*.
 *
 *
 * ### Scan target
 *
 * First let's view our target list:
 *
 * ```bash
 * curl https://api.probely.com/targets/ \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 *
 * From the results, we need the **target id**:
 *
 * ```json
 * {
 *    "count":1,
 *    "page_total":1,
 *    "page":1,
 *    "length":10,
 *    "results":[
 *       {
 *          "id":"AxtkqTE0v3E-",
 *          "name":"test-site",
 *          "desc":"",
 *          "url":"https://test-site.example.com",
 *          "settings":
 *             "(...)"
 *          ,
 *          "stack":
 *             "(...)"
 *          ,
 *          "verified":true,
 *          "(...)": "(...)"
 *       }
 *    ]
 * }
 * ```
 *
 *
 * Now we can send a request to start a scan on target id **AxtkqTE0v3E-**
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/scan_now/ \
 *   -X POST \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 *
 * And we get a response saying that the scan is scheduled: the status is **queued**, and we've got a **scan id**:
 *
 * ```json
 * {
 *    "changed":"2017-08-01T13:37:00.843339Z",
 *    "started":null,
 *    "completed":null,
 *    "mediums":0,
 *    "changed_by":
 *     "(...)"
 *    ,
 *    "highs":0,
 *    "status":"queued",
 *    "id":"S6dOMPn0SnoH",
 *    "created_by":
 *     "(...)"
 *    ,
 *    "target":
 *     "(...)"
 *    ,
 *    "created":"2017-08-01T13:37:00.843339Z",
 *    "lows":0
 * }
 * ```
 *
 *
 * Using the scan id **S6dOMPn0SnoH**, we can pool the scan status:
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 *
 * And we get a response saying that the scan status is now **started**:
 *
 * ```json
 * {
 *    "id":"S6dOMPn0SnoH",
 *    "changed":"2017-08-01T13:38:12.623650Z",
 *    "started":null,
 *    "completed":null,
 *    "mediums":0,
 *    "changed_by":
 *     "(...)"
 *    ,
 *    "highs":0,
 *    "status":"started",
 *    "created_by":
 *     "(...)"
 *    ,
 *    "target":
 *     "(...)"
 *    ,
 *    "created":"2017-08-01T13:37:00.843339Z",
 *    "lows":0
 * }
 * ```
 *
 *
 * The possible statuses are:
 *
 * | Status | Name | Description |
 * | ------ | ---- | ----------- |
 * | queued | Queued | The scan is queued to start |
 * | started | Started | The scan is currently running |
 * | under_review | Under Review | The scan is complete but has some findings under review |
 * | completed | Completed | The scan is complete |
 * | completed_with_errors | Completed with errors | The scan is complete even after getting some error(s) |
 * | failed | Failed | The scan failed |
 * | canceled | Canceled | The scan was canceled |
 * | canceling | Canceling | The scan is being canceled |
 *
 *
 * During the scan, the keys "lows", "mediums", and "highs" will be updated
 * with the findings, as they are being found.
 *
 * After we get either the status **completed** or **completed_with_errors**,
 * we can view the findings.
 *
 *
 * ### Get vulnerabilities
 *
 * Using the previous scan id **S6dOMPn0SnoH**, we can get the scan results:
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/scans/S6dOMPn0SnoH/ \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 * We get a response saying that the scan status is now **completed**, and
 * that **45** vulnerabilities were found. **14** low, **11** medium and
 * **20** high:
 *
 * ```json
 * {
 *    "id":"S6dOMPn0SnoH",
 *    "target":
 *     "(...)"
 *    ,
 *    "status":"completed",
 *    "started":"2017-08-01T13:37:12.623650Z",
 *    "completed":"2017-08-01T14:17:48.559514Z",
 *    "lows":14,
 *    "mediums":11,
 *    "highs":20,
 *    "created":"2017-08-01T13:37:00.843339Z",
 *    "created_by":
 *     "(...)"
 *    ,
 *    "changed":"2017-08-01T14:17:48.559514Z",
 *    "changed_by":
 *     "(...)"
 * }
 * ```
 *
 * You can now view the results of this scan, or the target findings.
 *
 *
 * Let's start with the scan results:
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/?scan=S6dOMPn0SnoH&page=1 \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 * ```json
 * {
 *    "count":45,
 *    "page_total":5,
 *    "page":1,
 *    "length":10,
 *    "results":[
 *       {
 *          "id":79,
 *          "target":
 *           "(...)"
 *          ,
 *          "scans":
 *           "(...)"
 *          ,
 *          "labels":
 *           "(...)"
 *          ,
 *          "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
 *          "requests":[
 *             {
 *                "request":"(...)",
 *                "response":"(...)"
 *             },
 *             {
 *                "request":"(...)",
 *                "response":"(...)"
 *             }
 *          ],
 *          "evidence":null,
 *          "extra":"",
 *          "definition":{
 *             "id":"xnV8PJVmSoLS",
 *             "name":"SQL Injection",
 *             "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
 *          },
 *          "url":"http://test-site.example.com/login.php",
 *          "path":"login.php",
 *          "method":"post",
 *          "parameter":"username",
 *          "value":"",
 *          "params":{
 *             "username":[
 *                "probely'"
 *             ],
 *             "password":[
 *                "probely"
 *             ]
 *          },
 *          "reporter":
 *           "(...)"
 *          ,
 *          "assignee":null,
 *          "state":"notfixed",
 *          "severity":30,
 *          "last_found":"2017-08-01T14:03:56.207794Z",
 *          "changed":"2017-08-01T14:03:56.207794Z",
 *          "changed_by":
 *           "(...)"
 *          ,
 *          "comment":""
 *       },
 *       "(...)"
 *    ]
 * }
 * ```
 *
 * You can also view all the target findings, which will show all the findings
 * that are not yet fixed. \\
 * The structure is similar to the previous result.
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/ \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 *
 * ### Get vulnerability details
 *
 * You can also get details for a particular finding in a target. \\
 * In this example we will get the details for the same finding as in the previous
 * section:
 *
 * ```bash
 * curl https://api.probely.com/targets/AxtkqTE0v3E-/findings/79/ \
 *   -X GET \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: JWT PROBELY_AUTH_TOKEN"
 * ```
 *
 *
 * This will result on the same information, but just for this particular finding:
 *
 * ```json
 * {
 *    "id":79,
 *    "target":
 *     "(...)"
 *    ,
 *    "scans":
 *     "(...)"
 *    ,
 *    "labels":
 *     "(...)"
 *    ,
 *    "fix":"To fix an SQL Injection in PHP, you should use Prepared Statements. Prepared Statements can be thought of as a kind of compiled template for the SQL that an application wants to run, that can be customized using variable parameters.\n\nPHP's PDO extension supports Prepared Statements, so that's probably your best option.\n\nIn the example below you can see the use of prepared statements. Variables ```$username``` and ```$hashedPassword``` come from user input.\n\n```\n$stmt = $dbg->prepare(\"SELECT id, name FROM users\n                       WHERE username=? AND password=?\");\n$stmt->bindParam(1, $username);\n$stmt->bindParam(2, $hashedPassword);\nif ($stmt->execute()) {\n\t$user = $stmt->fetch();\n\tif ($user) {\n\t\t$_SESSION['authID'] = $user['id'];\n\t\techo \"Hello \" . $user['name'];\n\t} else {\n\t\techo \"Invalid Login\";\n\t}\n}\n```  \n\nAs an added bonus, if you're executing the same query several times, then it'll be even faster than when you're not using prepared statements. This is because when using prepared statements, the query needs to be parsed (prepared) only once, but can be executed multiple times with the same or different parameters. \n",
 *    "requests":[
 *       {
 *          "request":"(...)",
 *          "response":"(...)"
 *       },
 *       {
 *          "request":"(...)",
 *          "response":"(...)"
 *       }
 *    ],
 *    "evidence":null,
 *    "extra":"",
 *    "definition":{
 *       "id":"xnV8PJVmSoLS",
 *       "name":"SQL Injection",
 *       "desc":"SQL Injections are the most common form of injections because SQL databases are very popular in dynamic web applications. This vulnerability allows an attacker to tamper existing SQL queries performed by the web application. Depending on the queries, the attacker might be able to access, modify or even destroy data from the database.\n\nSince databases are commonly used to store private data, such as authentication information, personal user data and site content, if an attacker gains access to it, the consequences are typically very severe, ranging from defacement of the web application to users data leakage or loss, or even full control of the web application or database server.",
 *    },
 *    "url":"http://test-site.example.com/login.php",
 *    "path":"login.php",
 *    "method":"post",
 *    "parameter":"username",
 *    "value":"",
 *    "params":{
 *       "username":[
 *          "probely'"
 *       ],
 *       "password":[
 *          "probely"
 *       ]
 *    },
 *    "reporter":
 *     "(...)"
 *    ,
 *    "assignee":null,
 *    "state":"notfixed",
 *    "severity":30,
 *    "last_found":"2017-08-01T14:03:56.207794Z",
 *    "changed":"2017-08-01T14:03:56.207794Z",
 *    "changed_by":
 *     "(...)"
 *    ,
 *    "comment":""
 * }
 * ```
 *
 * ## Concepts
 *
 * The short version is that you run *scans* on *targets*, and *findings* are
 * created for any issue that is found.
 * However, there are a few more concepts that must be explained in order to
 * get a complete picture of how Probely works.
 * We will spend the next few sections detailing the most important concepts.
 *
 *
 * ### Target
 *
 * A *target* defines the scope of a scan, what will and won't be included
 * in the scan plan.
 * This is done by filling a *target*'s *site* and *assets*.
 *
 * The entry point for the web application (and authentication) is setup
 * in the *target*'s *site*.
 *
 * In modern web applications, you are probably loading resources from
 * multiple domains.
 * A single page app, for example, will usualy load the page from one domain
 * and make AJAX requests to another.
 * This is what *assets* are for: they specify what domains our scanner should
 * follow and create requests for.
 *
 *
 * ### Site
 * A URL is probably not the only thing you will need to setup when scannning your application.
 * Does the application have an authenticated area? Does it use basic auth?
 * Does it expect a certain cookie or header?
 * These parameters are all configured in the *target*'s *site*.
 *
 *
 * We need to ensure that only allowed web applications are scanned.
 * Therefore, we must verify that you have control of any site you wish to include.
 * This can be done by:
 *   * Placing a file on a well-known location, on the site's server;
 *   * Creating specific DNS records.
 *
 *
 * ### Asset
 *
 * An *asset* is very similar to a *site*. The difference is that it is a domain instead
 * of a URL. Additionally, an *asset* has no login or basic auth support.
 * You can still have custom cookies and headers per *asset*.
 *
 * As with the *site*, you will need to prove an *asset*'s ownership. We have added some
 * rules to make your life easier, if you already have verified
 * a *site* and the domains match, the validation is fast-tracked.
 *
 * ### Scans
 *
 * This is what you're here for.
 * After configuring your *target*, you will want to run *scans* against it.
 * You can either start a one off scan, or schedule one for later - recurring
 * or not.
 *
 * During the *scan*, we will spider and run several modules to check for
 * security issues, which we call *findings*.
 * You can check the *findings* even before a scan ends.
 * If everything goes well, the scan will complete and that is it.
 *
 * With some *findings*, our automated processes may have difficulties
 * determining if it is a false positive or a legitimate issue.
 * In these instances, a scan will be marked as under review, and we will
 * further analyze the finding before making a decision.
 * We will only show findings that, for some degree of confidence, are true
 * positives.
 * A finding that we are not sure of will never be displayed.
 *
 * As much as we try to prevent it, a *scan* (or a sub-module) can malfunction.
 * If this happens, a *scan* is marked as:
 *   * "failed": the problem was irrecoverable;
 *   * "completed with errors": some module failed but the scan itself completed.
 *
 * During a scan, we try to determine what *frameworks* you are using
 * and add this information to the *site* and *asset* objects discussed
 * previously.
 *
 *
 * ### Findings
 *
 * The last core concept is the *finding*, this is a security issue that
 * we have found during our scans.
 * If the same issue is found in a new scan it will not open a new finding but
 * update the previous.
 *
 * A *finding* will have a lot of information about the issue.
 * Namely, where it was found, URL, insertion point (e.g. cookie), parameter,
 * and method.
 * Evidence we gathered, and the full request and response that we used.
 * Sugestions of how to go about fixing it.
 * A full description of the vulnerability is also present in the
 * *definition* property.
 * We also assign a severity and calculate the CVSS score for each.
 *
 * Besides all this, there are also actions that you can perform on a *finding*.
 * You can assign it to one user, leave comments for your team or add labels,
 * and reduce or increase the severity.
 *
 * If you don't plan on fixing the *finding* and accept the risk, or you think
 * we reported a false positive, you can mark the finding to reflect that.
 *
 */
export declare class SDK {
    /**
     * API keys allow you to perform operations without using your regular user.
     *
     * @remarks
     * There are two endpoints for API keys:
     *   * one to create keys that can only access the current scope;
     *   * one that allows the user to perform operations like creating targets.
     *
     */
    apiKeys: APIKeys;
    /**
     * Account management.
     */
    account: Account;
    /**
     * If you only require a small number of active targets at a time but don't
     *
     * @remarks
     * want to lose their history by deleting one to add another it is now
     * possible to archive targets.
     * This feature is still experimental, please contact our support if you
     * are interested.
     *
     */
    archive: Archive;
    /**
     * Other resources a scan required access to (e.g. the domain where an
     *
     * @remarks
     * API is being served) should be added here.
     * You can also configure custom headers and cookies for each asset.
     *
     */
    assets: Assets;
    /**
     * Important events in your Probely account are recorded as events.
     *
     * @remarks
     * An event is comprised of the resource acted on, when it occurred and
     * what kind of event (ex: `target_created`).
     *
     * Besides fetching these events using their endpoints you are also able
     * to receive them in real-time by registering webhooks.
     * The event is sent to every registered webhook URL as JSON and an HTTP
     * success status code (2XX) is expected in the response.
     * In case a webhook fails it will be retried with an exponential back-off
     * (maxing out at 4 hours) during 2 days, at the end of which an email is
     * sent to the users informing of this failure.
     * For security we suggest using an unique hard to guess identifier for the
     * webhook:
     * ```
     * https://webhook.example.com/d69179e3b06549469817560c650be98f/
     * ```
     * Webhook URL's are required to be HTTPS.
     *
     * When registering a webhook according to the chosen endpoint you can
     * receive any event for the account or only events for a single target.
     * A target webhook will not receive `user_created`, `user_deleted` and
     * `target_created` events and all events received pertain to the target
     * the webhook was created for.
     *
     */
    events: Events;
    /**
     * Findings are security issues found during scans.
     *
     * @remarks
     * We try hard to present valid findings only. We give as much information
     * as possible to help you know exactly what to do, without having to
     * resort to outside resources.
     *
     * Findings come with all the data we gathered during the scan, a
     * suggestion on how to fix it, and a description of the vulnerability.
     *
     */
    findings: Findings;
    /**
     * During the scans we run fingerprinters against the target and record the
     *
     * @remarks
     * result on the site and assets.
     * You can access our list of frameworks/software here.
     *
     */
    frameworks: Frameworks;
    /**
     * List available and installed integrations
     */
    integrations: Integrations;
    /**
     * To start integrating Probely with Jira you will first need to add the
     *
     * @remarks
     * Probely app to your Jira instance.
     * Go to the marketplace, search for Probely and install the application.
     * When prompted click the "Get Started" button and follow the steps described
     * to connect both accounts.
     * A short explanation of the sync options can be found
     * [here](https://help.probely.com/integrations/jira-syncronization-settings).
     *
     */
    jiraCloudIntegration: JiraCloudIntegration;
    /**
     * Find instructions on how to configure this integration for your Jira
     *
     * @remarks
     * deployment [here](https://help.probely.com/integrations/how-to-integrate-probely-with-jira-server).
     * A short explanation of the sync options can be found
     * [here](https://help.probely.com/integrations/jira-syncronization-settings).
     *
     */
    jiraServerIntegration: JiraServerIntegration;
    /**
     * You can add labels to findings to help you keep track of you development.
     *
     * @remarks
     * Use these endpoints to manage your labels.
     *
     */
    labels: Labels;
    /**
     * Login users and verify token. For login we make use of [JSON web tokens](https://jwt.io/).
     *
     * @remarks
     *
     */
    login: Login;
    /**
     * Use these endpoints to reset a user's password.
     *
     * @remarks
     *
     */
    passwordReset: PasswordReset;
    plan: Plan;
    /**
     * Start and manage scans against the target.
     *
     * @remarks
     * You can also produce reports and access the list of scanned endpoints.
     *
     */
    scans: Scans;
    /**
     * You can schedule scans for the future as a one off, or on a recurring
     *
     * @remarks
     * basis.
     *
     */
    scheduled: Scheduled;
    /**
     * Every target has a site object, it contains the main entry URL for scans.
     *
     * @remarks
     * Other settings are also connected to a site like login parameters,
     * basic auth, and custom headers and cookies.
     *
     */
    site: Site;
    /**
     * Receive slack notifications on Probely events.
     *
     * @remarks
     *
     */
    slackIntegration: SlackIntegration;
    /**
     * Probely has several graphs and tables that it uses to
     *
     * @remarks
     * display statistics of the current state of a target or account.
     *
     */
    statistics: Statistics;
    /**
     * In Probely, a target is what defines what is being scanned.
     *
     * @remarks
     * Connected to a target there are two other objects: a site and a list of
     * assets.
     *
     * The site is the where the scan starts and will usually be the main
     * entry point for your web application.
     *
     * As things are today, a single URL is not enough to describe all of the
     * resources an application uses.
     * For example, a modern single page web application might load the main
     * page from one domain and make AJAX requests to one or more other domains.
     * This where assets come in, they are used to add extra domains that
     * our scanner should follow.
     *
     */
    targets: Targets;
    /**
     * Manage self and other users.
     */
    users: Users;
    /**
     * In Probely findings are connected to vulnerability definitions.
     *
     * @remarks
     * This is how we keep track what type of vulnerability it is, it also
     * includes a name and description.
     *
     */
    vulnerabilities: Vulnerabilities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
