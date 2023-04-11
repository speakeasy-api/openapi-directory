import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateCard
     *
     * @remarks
     * Adds a card on file to an existing merchant.
     */
    createCard(req: shared.CreateCardRequest, security: operations.CreateCardSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCardResponse>;
    /**
     * DisableCard
     *
     * @remarks
     * Disables the card, preventing any further updates or charges.
     * Disabling an already disabled card is allowed but has no effect.
     */
    disableCard(req: operations.DisableCardRequest, security: operations.DisableCardSecurity, config?: AxiosRequestConfig): Promise<operations.DisableCardResponse>;
    /**
     * ListCards
     *
     * @remarks
     * Retrieves a list of cards owned by the account making the request.
     * A max of 25 cards will be returned.
     */
    listCards(req: operations.ListCardsRequest, security: operations.ListCardsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCardsResponse>;
    /**
     * RetrieveCard
     *
     * @remarks
     * Retrieves details for a specific Card.
     */
    retrieveCard(req: operations.RetrieveCardRequest, security: operations.RetrieveCardSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCardResponse>;
}
