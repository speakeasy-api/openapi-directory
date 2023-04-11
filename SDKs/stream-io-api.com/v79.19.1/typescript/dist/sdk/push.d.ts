import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Push {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create device
     *
     * @remarks
     * Adds a new device to a user, if the same device already exists the call will have no effect
     */
    createDevice(req: shared.CreateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceResponse>;
    /**
     * List push providers
     *
     * @remarks
     * List details of all push providers.
     */
    listPushProviders(config?: AxiosRequestConfig): Promise<operations.ListPushProvidersResponse>;
    /**
     * Upsert a push provider
     *
     * @remarks
     * Upsert a push provider for v2 with multi bundle/package support
     */
    upsertPushProvider(req: shared.UpsertPushProviderRequest, config?: AxiosRequestConfig): Promise<operations.UpsertPushProviderResponse>;
}
