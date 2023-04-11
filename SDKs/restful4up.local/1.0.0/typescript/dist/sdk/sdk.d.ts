import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://restful4up.local", "/v1"];
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
 * RESTful API 4 Unipacker
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * apply given YARA rules to the given executable. (upto 10 rules)
     */
    applyYaraRules(req: operations.ApplyYaraRulesRequestBody, config?: AxiosRequestConfig): Promise<operations.ApplyYaraRulesResponse>;
    /**
     * clean up the uploaded files
     */
    clean(config?: AxiosRequestConfig): Promise<operations.CleanResponse>;
    /**
     * try to get the emulation output after unpacking the file
     */
    emulationOutput(req: operations.EmulationOutputRequestBody, config?: AxiosRequestConfig): Promise<operations.EmulationOutputResponse>;
    /**
     * generate partial YARA rules for give executable. (Rule without the condition section)
     */
    generatePartialYaraRule(req: operations.GeneratePartialYaraRuleRequestBody, config?: AxiosRequestConfig): Promise<operations.GeneratePartialYaraRuleResponse>;
    /**
     * try to unpack the given file
     */
    unpack(req: operations.UnpackRequestBody, config?: AxiosRequestConfig): Promise<operations.UnpackResponse>;
}
