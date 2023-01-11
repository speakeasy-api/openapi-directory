import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bills {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * billDetailBillsJurisdictionSessionBillIdGet - Bill Detail
     *
     * Obtain bill information based on (state, session, bill_id).
    **/
    billDetailBillsJurisdictionSessionBillIdGet(req: operations.BillDetailBillsJurisdictionSessionBillIdGetRequest, config?: AxiosRequestConfig): Promise<operations.BillDetailBillsJurisdictionSessionBillIdGetResponse>;
    /**
     * billDetailByIdBillsOcdBillOpenstatesBillIdGet - Bill Detail By Id
     *
     * Obtain bill information by internal ID in the format ocd-bill/*uuid*.
    **/
    billDetailByIdBillsOcdBillOpenstatesBillIdGet(req: operations.BillDetailByIdBillsOcdBillOpenstatesBillIdGetRequest, config?: AxiosRequestConfig): Promise<operations.BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse>;
    /**
     * billsSearchBillsGet - Bills Search
     *
     * Search for bills matching given criteria.
     *
     * Must either specify a jurisdiction or a full text query (q).  Additional parameters will
     * futher restrict bills returned.
    **/
    billsSearchBillsGet(req: operations.BillsSearchBillsGetRequest, config?: AxiosRequestConfig): Promise<operations.BillsSearchBillsGetResponse>;
}
