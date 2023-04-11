import { AquiferCodes } from "./aquifercodes";
import { Aquifers } from "./aquifers";
import { Cities } from "./cities";
import { Config } from "./config";
import { Drillers } from "./drillers";
import { Keycloak } from "./keycloak";
import * as shared from "./models/shared";
import { Submissions } from "./submissions";
import { Surveys } from "./surveys";
import { Wells } from "./wells";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apps.nrs.gov.bc.ca/gwells/api/v1/"];
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
 * The groundwater wells, aquifers and registry API contains information related to groundwater wells and aquifers as well as a register of qualified well drillers and well pump installers registered to operate in B.C.
 */
export declare class SDK {
    aquiferCodes: AquiferCodes;
    aquifers: Aquifers;
    cities: Cities;
    config: Config;
    drillers: Drillers;
    keycloak: Keycloak;
    submissions: Submissions;
    surveys: Surveys;
    wells: Wells;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
