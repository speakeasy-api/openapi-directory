import { Atm } from "./atm";
import { Bca } from "./bca";
import { Branch } from "./branch";
import { Ccc } from "./ccc";
import { Pca } from "./pca";
import { Sme } from "./sme";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3"];
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
 * Latest Swagger specification for OpenData
 */
export declare class SDK {
    /**
     * Endpoint for getting ATM data
     */
    atm: Atm;
    /**
     * Endpoint for getting Business Current Account data
     */
    bca: Bca;
    /**
     * Endpoint for getting Branch data
     */
    branch: Branch;
    /**
     * Endpoint for getting Commercial Credit Card data
     */
    ccc: Ccc;
    /**
     * Endpoint for getting Personal Current Account data
     */
    pca: Pca;
    /**
     * Endpoint for getting Unsecured SME Loan data
     */
    sme: Sme;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
