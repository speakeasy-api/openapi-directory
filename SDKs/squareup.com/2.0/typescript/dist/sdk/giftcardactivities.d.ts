import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GiftCardActivities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateGiftCardActivity
     *
     * @remarks
     * Creates a gift card activity. For more information, see
     * [GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and
     * [Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).
     */
    createGiftCardActivity(req: shared.CreateGiftCardActivityRequest, security: operations.CreateGiftCardActivitySecurity, config?: AxiosRequestConfig): Promise<operations.CreateGiftCardActivityResponse>;
    /**
     * ListGiftCardActivities
     *
     * @remarks
     * Lists gift card activities. By default, you get gift card activities for all
     * gift cards in the seller's account. You can optionally specify query parameters to
     * filter the list. For example, you can get a list of gift card activities for a gift card,
     * for all gift cards in a specific region, or for activities within a time window.
     */
    listGiftCardActivities(req: operations.ListGiftCardActivitiesRequest, security: operations.ListGiftCardActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.ListGiftCardActivitiesResponse>;
}
