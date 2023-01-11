import { AxiosInstance } from "axios";
import { ApplicationDetailService } from "./applicationdetailservice";
import { Projects } from "./projects";
import { TestEnvironmentCatalog } from "./testenvironmentcatalog";
export declare const ServerList: readonly ["https://testing.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
