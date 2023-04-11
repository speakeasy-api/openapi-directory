import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GiftCards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateGiftCard
     *
     * @remarks
     * Creates a digital gift card or registers a physical (plastic) gift card. You must activate the gift card before
     * it can be used for payment. For more information, see
     * [Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-square-gift-cards).
     */
    createGiftCard(req: shared.CreateGiftCardRequest, security: operations.CreateGiftCardSecurity, config?: AxiosRequestConfig): Promise<operations.CreateGiftCardResponse>;
    /**
     * LinkCustomerToGiftCard
     *
     * @remarks
     * Links a customer to a gift card
     */
    linkCustomerToGiftCard(req: operations.LinkCustomerToGiftCardRequest, security: operations.LinkCustomerToGiftCardSecurity, config?: AxiosRequestConfig): Promise<operations.LinkCustomerToGiftCardResponse>;
    /**
     * ListGiftCards
     *
     * @remarks
     * Lists all gift cards. You can specify optional filters to retrieve
     * a subset of the gift cards.
     */
    listGiftCards(req: operations.ListGiftCardsRequest, security: operations.ListGiftCardsSecurity, config?: AxiosRequestConfig): Promise<operations.ListGiftCardsResponse>;
    /**
     * RetrieveGiftCard
     *
     * @remarks
     * Retrieves a gift card using its ID.
     */
    retrieveGiftCard(req: operations.RetrieveGiftCardRequest, security: operations.RetrieveGiftCardSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveGiftCardResponse>;
    /**
     * RetrieveGiftCardFromGAN
     *
     * @remarks
     * Retrieves a gift card using the gift card account number (GAN).
     */
    retrieveGiftCardFromGAN(req: shared.RetrieveGiftCardFromGANRequest, security: operations.RetrieveGiftCardFromGANSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveGiftCardFromGANResponse>;
    /**
     * RetrieveGiftCardFromNonce
     *
     * @remarks
     * Retrieves a gift card using a nonce (a secure token) that represents the gift card.
     */
    retrieveGiftCardFromNonce(req: shared.RetrieveGiftCardFromNonceRequest, security: operations.RetrieveGiftCardFromNonceSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveGiftCardFromNonceResponse>;
    /**
     * UnlinkCustomerFromGiftCard
     *
     * @remarks
     * Unlinks a customer from a gift card
     */
    unlinkCustomerFromGiftCard(req: operations.UnlinkCustomerFromGiftCardRequest, security: operations.UnlinkCustomerFromGiftCardSecurity, config?: AxiosRequestConfig): Promise<operations.UnlinkCustomerFromGiftCardResponse>;
}
