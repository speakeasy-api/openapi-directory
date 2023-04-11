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
     * Create a new abuse ticket
     */
    createTicket(req: shared.AbuseTicketCreate, config?: AxiosRequestConfig): Promise<operations.CreateTicketResponse>;
    /**
     * Return the abuse ticket data for a given ticket id
     */
    getTicketInfo(req: operations.GetTicketInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetTicketInfoResponse>;
    /**
     * List all abuse tickets ids that match user provided filters
     */
    getTickets(req: operations.GetTicketsRequest, config?: AxiosRequestConfig): Promise<operations.GetTicketsResponse>;
}
