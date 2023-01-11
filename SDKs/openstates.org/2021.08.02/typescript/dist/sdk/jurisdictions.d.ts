import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jurisdictions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * jurisdictionDetailJurisdictionsJurisdictionIdGet - Jurisdiction Detail
     *
     * Get details on a single Jurisdiction (e.g. state or municipality).
    **/
    jurisdictionDetailJurisdictionsJurisdictionIdGet(req: operations.JurisdictionDetailJurisdictionsJurisdictionIdGetRequest, config?: AxiosRequestConfig): Promise<operations.JurisdictionDetailJurisdictionsJurisdictionIdGetResponse>;
    /**
     * jurisdictionListJurisdictionsGet - Jurisdiction List
     *
     * Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.
    **/
    jurisdictionListJurisdictionsGet(req: operations.JurisdictionListJurisdictionsGetRequest, config?: AxiosRequestConfig): Promise<operations.JurisdictionListJurisdictionsGetResponse>;
}
