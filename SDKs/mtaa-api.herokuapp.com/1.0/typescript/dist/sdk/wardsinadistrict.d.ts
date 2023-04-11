import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WardsInADistrict {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all wards in a district
     *
     * @remarks
     * Returns all wards in a  specified district and district postcode
     */
    wardsInADistrict(req: operations.WardsInADistrictRequest, config?: AxiosRequestConfig): Promise<operations.WardsInADistrictResponse>;
}
