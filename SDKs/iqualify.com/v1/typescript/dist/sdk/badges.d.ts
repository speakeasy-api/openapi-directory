import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Badges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOfferingsOfferingIdBadges - Find offering badges
     *
     * Responds with the badge for an offering matching the offeringId.
    **/
    getOfferingsOfferingIdBadges(req: operations.GetOfferingsOfferingIdBadgesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdBadgesResponse>;
    /**
     * getUsersUserEmailBadges - Find user's badges
     *
     * Responds with all badges that the specified user has been awarded.
    **/
    getUsersUserEmailBadges(req: operations.GetUsersUserEmailBadgesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailBadgesResponse>;
    /**
     * postOfferingsOfferingIdUsersUserEmailBadgesAward - Award badge
     *
     * Awards a badge to a user in the offering.
    **/
    postOfferingsOfferingIdUsersUserEmailBadgesAward(req: operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse>;
}
