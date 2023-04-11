import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reviews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a single review.
     */
    androidpublisherReviewsGet(req: operations.AndroidpublisherReviewsGetRequest, security: operations.AndroidpublisherReviewsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsGetResponse>;
    /**
     * Returns a list of reviews. Only reviews from last week will be returned.
     */
    androidpublisherReviewsList(req: operations.AndroidpublisherReviewsListRequest, security: operations.AndroidpublisherReviewsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsListResponse>;
    /**
     * Reply to a single review, or update an existing reply.
     */
    androidpublisherReviewsReply(req: operations.AndroidpublisherReviewsReplyRequest, security: operations.AndroidpublisherReviewsReplySecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsReplyResponse>;
}
