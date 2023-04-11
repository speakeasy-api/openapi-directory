import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReviewsFindAndModifyReviews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a review
     *
     * @remarks
     * - Only the review author is able to remove their review
     *
     */
    deleteReviewsReviewId(req: operations.DeleteReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReviewsReviewIdResponse>;
    /**
     * Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
     *
     * @remarks
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
     */
    getReviews(req: operations.GetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResponse>;
    /**
     * Find a Review within a particular App and marketplace
     */
    getReviewsReviewId(req: operations.GetReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsReviewIdResponse>;
    /**
     * Update a review fields
     *
     * @remarks
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
     */
    patchReviewsReviewId(req: operations.PatchReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchReviewsReviewIdResponse>;
    /**
     * Post a review from a User and returns the new post
     *
     * @remarks
     * - Only authenticated users are able to post reviews
     * - Returns the newly created review
     *
     */
    postReviews(req: operations.PostReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsResponse>;
    /**
     * Update a review from a User and returns the new post
     *
     * @remarks
     * - Only the review author is able to update their review
     * - Returns the newly updated review
     *
     */
    postReviewsReviewId(req: operations.PostReviewsReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.PostReviewsReviewIdResponse>;
}
