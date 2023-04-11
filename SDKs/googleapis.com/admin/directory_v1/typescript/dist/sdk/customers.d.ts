import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates multiple print servers.
     */
    adminCustomersChromePrintServersBatchCreatePrintServers(req: operations.AdminCustomersChromePrintServersBatchCreatePrintServersRequest, security: operations.AdminCustomersChromePrintServersBatchCreatePrintServersSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersBatchCreatePrintServersResponse>;
    /**
     * Deletes multiple print servers.
     */
    adminCustomersChromePrintServersBatchDeletePrintServers(req: operations.AdminCustomersChromePrintServersBatchDeletePrintServersRequest, security: operations.AdminCustomersChromePrintServersBatchDeletePrintServersSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersBatchDeletePrintServersResponse>;
    /**
     * Creates a print server.
     */
    adminCustomersChromePrintServersCreate(req: operations.AdminCustomersChromePrintServersCreateRequest, security: operations.AdminCustomersChromePrintServersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersCreateResponse>;
    /**
     * Deletes a print server.
     */
    adminCustomersChromePrintServersDelete(req: operations.AdminCustomersChromePrintServersDeleteRequest, security: operations.AdminCustomersChromePrintServersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersDeleteResponse>;
    /**
     * Returns a print server's configuration.
     */
    adminCustomersChromePrintServersGet(req: operations.AdminCustomersChromePrintServersGetRequest, security: operations.AdminCustomersChromePrintServersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersGetResponse>;
    /**
     * Lists print server configurations.
     */
    adminCustomersChromePrintServersList(req: operations.AdminCustomersChromePrintServersListRequest, security: operations.AdminCustomersChromePrintServersListSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersListResponse>;
    /**
     * Updates a print server's configuration.
     */
    adminCustomersChromePrintServersPatch(req: operations.AdminCustomersChromePrintServersPatchRequest, security: operations.AdminCustomersChromePrintServersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintServersPatchResponse>;
    /**
     * Creates printers under given Organization Unit.
     */
    adminCustomersChromePrintersBatchCreatePrinters(req: operations.AdminCustomersChromePrintersBatchCreatePrintersRequest, security: operations.AdminCustomersChromePrintersBatchCreatePrintersSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersBatchCreatePrintersResponse>;
    /**
     * Deletes printers in batch.
     */
    adminCustomersChromePrintersBatchDeletePrinters(req: operations.AdminCustomersChromePrintersBatchDeletePrintersRequest, security: operations.AdminCustomersChromePrintersBatchDeletePrintersSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersBatchDeletePrintersResponse>;
    /**
     * Creates a printer under given Organization Unit.
     */
    adminCustomersChromePrintersCreate(req: operations.AdminCustomersChromePrintersCreateRequest, security: operations.AdminCustomersChromePrintersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersCreateResponse>;
    /**
     * List printers configs.
     */
    adminCustomersChromePrintersList(req: operations.AdminCustomersChromePrintersListRequest, security: operations.AdminCustomersChromePrintersListSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersListResponse>;
    /**
     * Lists the supported printer models.
     */
    adminCustomersChromePrintersListPrinterModels(req: operations.AdminCustomersChromePrintersListPrinterModelsRequest, security: operations.AdminCustomersChromePrintersListPrinterModelsSecurity, config?: AxiosRequestConfig): Promise<operations.AdminCustomersChromePrintersListPrinterModelsResponse>;
    /**
     * Retrieves a customer.
     */
    directoryCustomersGet(req: operations.DirectoryCustomersGetRequest, security: operations.DirectoryCustomersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersGetResponse>;
    /**
     * Patches a customer.
     */
    directoryCustomersPatch(req: operations.DirectoryCustomersPatchRequest, security: operations.DirectoryCustomersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersPatchResponse>;
    /**
     * Updates a customer.
     */
    directoryCustomersUpdate(req: operations.DirectoryCustomersUpdateRequest, security: operations.DirectoryCustomersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryCustomersUpdateResponse>;
}
