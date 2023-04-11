import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.
 *
 * @remarks
 *
 * Currency for all amounts is €. All prices exclude VAT.
 *
 */
export declare class ServerTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Server Types
     *
     * @remarks
     * Gets all Server type objects.
     */
    getServerTypes(req: operations.GetServerTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetServerTypesResponse>;
    /**
     * Get a Server Type
     *
     * @remarks
     * Gets a specific Server type object.
     */
    getServerTypesId(req: operations.GetServerTypesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServerTypesIdResponse>;
}
