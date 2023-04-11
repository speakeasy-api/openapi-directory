import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Set subaccount's password
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Create a Subaccount owned by the authenticated Reseller
     */
    createSubaccountJson(req: shared.SubaccountCreate, config?: AxiosRequestConfig): Promise<operations.CreateSubaccountJsonResponse>;
    /**
     * Create a Subaccount owned by the authenticated Reseller
     */
    createSubaccountRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.CreateSubaccountRawResponse>;
    /**
     * Request the deletion of a shopper profile
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    delete(req: operations.DeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * Get details for the specified Shopper
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Get details for the specified Shopper
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * Update details for the specified Shopper
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    updateJson(req: operations.UpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJsonResponse>;
    /**
     * Update details for the specified Shopper
     *
     * @remarks
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
     */
    updateRaw(req: operations.UpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRawResponse>;
}
