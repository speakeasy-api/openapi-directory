import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WardsInADistrict {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * wardsInADistrict - Returns all wards in a district
     *
     * Returns all wards in a  specified district and district postcode
    **/
    wardsInADistrict(req: operations.WardsInADistrictRequest, config?: AxiosRequestConfig): Promise<operations.WardsInADistrictResponse>;
}
