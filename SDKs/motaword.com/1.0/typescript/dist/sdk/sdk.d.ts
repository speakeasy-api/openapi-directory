import { Activity } from "./activity";
import { Async } from "./async";
import { Auth } from "./auth";
import { Blog } from "./blog";
import { Commission } from "./commission";
import { ContinuousProject } from "./continuousproject";
import { Corporate } from "./corporate";
import { Document } from "./document";
import { Glossary } from "./glossary";
import { Integrations } from "./integrations";
import { Invitation } from "./invitation";
import { MachineLearning } from "./machinelearning";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Pam } from "./pam";
import { Payment } from "./payment";
import { Project } from "./project";
import { ProjectDocument } from "./projectdocument";
import { ProjectWebhooks } from "./projectwebhooks";
import { Report } from "./report";
import { Search } from "./search";
import { Static } from "./static";
import { Stats } from "./stats";
import { Strings } from "./strings";
import { StyleGuide } from "./styleguide";
import { Surveys } from "./surveys";
import { User } from "./user";
import { Vendor } from "./vendor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.motaword.com", "https://sandbox.motaword.com", "http://localhost"];
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
 * Use MotaWord API to post and track your translation projects.
 *
 * @see {@link https://www.motaword.com/developer}
 */
export declare class SDK {
    activity: Activity;
    async: Async;
    auth: Auth;
    blog: Blog;
    commission: Commission;
    continuousProject: ContinuousProject;
    corporate: Corporate;
    document: Document;
    glossary: Glossary;
    integrations: Integrations;
    invitation: Invitation;
    machineLearning: MachineLearning;
    pam: Pam;
    payment: Payment;
    project: Project;
    projectDocument: ProjectDocument;
    projectWebhooks: ProjectWebhooks;
    report: Report;
    search: Search;
    static: Static;
    stats: Stats;
    strings: Strings;
    styleGuide: StyleGuide;
    surveys: Surveys;
    user: User;
    vendor: Vendor;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Clear cache by key
     */
    deleteCache(req: operations.DeleteCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCacheResponse>;
}
