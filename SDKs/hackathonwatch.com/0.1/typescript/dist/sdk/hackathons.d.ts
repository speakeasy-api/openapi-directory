import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about hackathons
 */
export declare class Hackathons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the detail of a given hackathon
     */
    getHackathonsIdFormat(req: operations.GETHackathonsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETHackathonsIdFormatResponse>;
    /**
     * Return a list of coming hackathons
     */
    getHackathonsComingFormat(req: operations.GETHackathonsComingFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETHackathonsComingFormatResponse>;
}
