import { ApplicationDetailService } from "./applicationdetailservice";
import { Projects } from "./projects";
import { TestEnvironmentCatalog } from "./testenvironmentcatalog";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://testing.googleapis.com/"];
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
 * Allows developers to run automated tests for their mobile applications on Google infrastructure.
 *
 * @see {@link https://developers.google.com/cloud-test-lab/}
 */
export declare class SDK {
    applicationDetailService: ApplicationDetailService;
    projects: Projects;
    testEnvironmentCatalog: TestEnvironmentCatalog;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
