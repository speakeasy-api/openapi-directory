import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AquiferCodes } from "./aquifercodes";
import { Aquifers } from "./aquifers";
import { Cities } from "./cities";
import { Config } from "./config";
import { Drillers } from "./drillers";
import { Keycloak } from "./keycloak";
import { Submissions } from "./submissions";
import { Surveys } from "./surveys";
import { Wells } from "./wells";
export declare const ServerList: readonly ["https://apps.nrs.gov.bc.ca/gwells/api/v1/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
