import { CaseClassifications } from "./caseclassifications";
import { Cases } from "./cases";
import { Media } from "./media";
import { Projects } from "./projects";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudsupport.googleapis.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * Manages Google Cloud technical support cases for Customer Care support offerings.
 *
 * @see {@link https://cloud.google.com/support/docs/apis}
 */
export declare class SDK {
    caseClassifications: CaseClassifications;
    cases: Cases;
    media: Media;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
