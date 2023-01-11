import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OfferingLearners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteOfferingsOfferingIdUsersMarkerEmailMarks - Remove learners from coach's marking list
     *
     * Removes an array of learners from coach's marking list.
    **/
    deleteOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * deleteOfferingsOfferingIdUsersUserEmail - Removes user from the offering
     *
     * Removes a user from the offering.
    **/
    deleteOfferingsOfferingIdUsersUserEmail(req: operations.DeleteOfferingsOfferingIdUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailResponse>;
    /**
     * getOfferingsOfferingIdUsers - Find offering's users
     *
     * Responds with a list of users in the offering (facilitators, learners and markers.).
    **/
    getOfferingsOfferingIdUsers(req: operations.GetOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersResponse>;
    /**
     * getOfferingsOfferingIdUsersMarkerEmailMarks - Find Learners marked by a coach
     *
     * Responds with all learners marked by the specified coach.
    **/
    getOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.GetOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * patchUsersUserEmailTransfer - Transfer a user between offerings
     *
     * Moves the user's access and progress from one offering to another.
    **/
    patchUsersUserEmailTransfer(req: operations.PatchUsersUserEmailTransferRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailTransferResponse>;
    /**
     * postOfferingsOfferingIdUsers - Adds user to the offering
     *
     * Adds one or more users to the offering.
    **/
    postOfferingsOfferingIdUsers(req: operations.PostOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersResponse>;
    /**
     * postOfferingsOfferingIdUsersMarkerEmailMarks - Add learners to be marked by a coach
     *
     * Adds an array of learners to be marked by the specified coach.
    **/
    postOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.PostOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
}
