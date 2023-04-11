import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Promooffer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Accepts the promo offer.
     */
    booksPromoofferAccept(req: operations.BooksPromoofferAcceptRequest, security: operations.BooksPromoofferAcceptSecurity, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferAcceptResponse>;
    /**
     * Marks the promo offer as dismissed.
     */
    booksPromoofferDismiss(req: operations.BooksPromoofferDismissRequest, security: operations.BooksPromoofferDismissSecurity, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferDismissResponse>;
    /**
     * Returns a list of promo offers available to the user
     */
    booksPromoofferGet(req: operations.BooksPromoofferGetRequest, security: operations.BooksPromoofferGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferGetResponse>;
}
