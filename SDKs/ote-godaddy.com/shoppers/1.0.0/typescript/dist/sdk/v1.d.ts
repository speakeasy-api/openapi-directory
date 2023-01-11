import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changePassword - Set subaccount's password
     *
     * <strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * createSubaccount - Create a Subaccount owned by the authenticated Reseller
    **/
    createSubaccount(req: operations.CreateSubaccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubaccountResponse>;
    /**
     * delete - Request the deletion of a shopper profile
     *
     * <strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    delete(req: operations.DeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * get - Get details for the specified Shopper
     *
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getStatus - Get details for the specified Shopper
     *
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * update - Update details for the specified Shopper
     *
     * <strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    update(req: operations.UpdateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponse>;
}
