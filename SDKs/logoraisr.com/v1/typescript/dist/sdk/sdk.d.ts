import * as shared from "./models/shared";
import { Previews } from "./previews";
import { Processes } from "./processes";
import { Projects } from "./projects";
import { Reports } from "./reports";
import { Results } from "./results";
import { Uploads } from "./uploads";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.logoraisr.com/rest-v1"];
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
 * <p style="font-size:110%;">Dig into our logoraisr API reference documentation. We also offer an OpenAPI specification to allow easy integration into your systems. You can download the json file by clicking on the download button.<p><br><p style="font-size:110%; font-weight:bold">OpenAPI 2.0 Validation Status</p><img src="https://online.swagger.io/validator?url=https://docs.logoraisr.com/">
 */
export declare class SDK {
    previews: Previews;
    processes: Processes;
    projects: Projects;
    reports: Reports;
    results: Results;
    uploads: Uploads;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
