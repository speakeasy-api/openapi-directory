import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OfferingLearners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove learners from coach's marking list
     *
     * @remarks
     * Removes an array of learners from coach's marking list.
     */
    deleteOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * Removes user from the offering
     *
     * @remarks
     * Removes a user from the offering.
     */
    deleteOfferingsOfferingIdUsersUserEmail(req: operations.DeleteOfferingsOfferingIdUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailResponse>;
    /**
     * Find offering's users
     *
     * @remarks
     * Responds with a list of users in the offering (facilitators, learners and markers.).
     */
    getOfferingsOfferingIdUsers(req: operations.GetOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersResponse>;
    /**
     * Find Learners marked by a coach
     *
     * @remarks
     * Responds with all learners marked by the specified coach.
     */
    getOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.GetOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * Transfer a user between offerings
     *
     * @remarks
     * Moves the user's access and progress from one offering to another.
     */
    patchUsersUserEmailTransfer(req: operations.PatchUsersUserEmailTransferRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailTransferResponse>;
    /**
     * Adds user to the offering
     *
     * @remarks
     * Adds one or more users to the offering.
     */
    postOfferingsOfferingIdUsers(req: operations.PostOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersResponse>;
    /**
     * Add learners to be marked by a coach
     *
     * @remarks
     * Adds an array of learners to be marked by the specified coach.
     */
    postOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.PostOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
}
