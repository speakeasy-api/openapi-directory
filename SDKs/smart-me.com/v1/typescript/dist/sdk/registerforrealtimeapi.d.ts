import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegisterForRealtimeApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a realtime API registration.
     *
     * @remarks
     * Deletes a realtime API registration.
     */
    registerForRealtimeApiDelete(req: operations.RegisterForRealtimeApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiDeleteResponse>;
    /**
     * Gets all registrations for the Realtime API.
     *
     * @remarks
     * Gets all registrations for the Realtime API.
     */
    registerForRealtimeApiGet(config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiGetResponse>;
    /**
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
     *              More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     *
     * @remarks
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     */
    registerForRealtimeApiPostForm(req: shared.RegisterRealtimeApiData, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiPostFormResponse>;
    /**
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
     *              More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     *
     * @remarks
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     */
    registerForRealtimeApiPostJson(req: shared.RegisterRealtimeApiData, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiPostJsonResponse>;
    /**
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
     *              More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     *
     * @remarks
     * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
     */
    registerForRealtimeApiPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.RegisterForRealtimeApiPostRawResponse>;
}
