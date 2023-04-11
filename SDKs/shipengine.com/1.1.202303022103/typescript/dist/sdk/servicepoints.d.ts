import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServicePoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Service Point By ID
     *
     * @remarks
     * Returns a carrier service point by using the service_point_id
     */
    servicePointsGetById(req: operations.ServicePointsGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.ServicePointsGetByIdResponse>;
    /**
     * List Service Points
     *
     * @remarks
     * List carrier service points by location
     */
    servicePointsList(req: any, config?: AxiosRequestConfig): Promise<operations.ServicePointsListResponse>;
}
