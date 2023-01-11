import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { ApiKeys } from "./apikeys";
import { Account } from "./account";
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


export const ServerList = [
	"https://api.probely.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public apiKeys: ApiKeys;
  public account: Account;
  public archive: Archive;
  public assets: Assets;
  public events: Events;
  public findings: Findings;
  public frameworks: Frameworks;
  public integrations: Integrations;
  public jiraCloudIntegration: JiraCloudIntegration;
  public jiraServerIntegration: JiraServerIntegration;
  public labels: Labels;
  public login: Login;
  public passwordReset: PasswordReset;
  public plan: Plan;
  public scans: Scans;
  public scheduled: Scheduled;
  public site: Site;
  public slackIntegration: SlackIntegration;
  public statistics: Statistics;
  public targets: Targets;
  public users: Users;
  public vulnerabilities: Vulnerabilities;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.apiKeys = new ApiKeys(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.account = new Account(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.archive = new Archive(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assets = new Assets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.events = new Events(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.findings = new Findings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.frameworks = new Frameworks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.integrations = new Integrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jiraCloudIntegration = new JiraCloudIntegration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jiraServerIntegration = new JiraServerIntegration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.labels = new Labels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.login = new Login(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.passwordReset = new PasswordReset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.plan = new Plan(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scans = new Scans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scheduled = new Scheduled(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.site = new Site(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.slackIntegration = new SlackIntegration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statistics = new Statistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.targets = new Targets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vulnerabilities = new Vulnerabilities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}