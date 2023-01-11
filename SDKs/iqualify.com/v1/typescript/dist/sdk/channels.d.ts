import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteOfferingsOfferingIdChannelsChannelIdLearners - Remove learners from a group channel
     *
     * Removes a learner from the specified group channel.
    **/
    deleteOfferingsOfferingIdChannelsChannelIdLearners(req: operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdComments - Find comments
     *
     * Responds with a list of comments made in any posts in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdComments(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts - Find posts
     *
     * Responds with a list of posts made in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies - Find replies
     *
     * Responds with a list of replies to comments in any posts in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse>;
    /**
     * getOfferingsOfferingIdChannels - Find channels
     *
     * Responds with a list of channels in an offering.
    **/
    getOfferingsOfferingIdChannels(req: operations.GetOfferingsOfferingIdChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdChannelsResponse>;
    /**
     * getOfferingsOfferingIdChannelsChannelIdLearners - Find learners in a group channel
     *
     * Finds all learners in a specified group channel.
    **/
    getOfferingsOfferingIdChannelsChannelIdLearners(req: operations.GetOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
    /**
     * patchOfferingsOfferingIdChannelsChannelId - Update channel
     *
     * Updates a channel in an offering.
    **/
    patchOfferingsOfferingIdChannelsChannelId(req: operations.PatchOfferingsOfferingIdChannelsChannelIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdChannelsChannelIdResponse>;
    /**
     * postOfferingsOfferingIdChannels - Add channel
     *
     * Adds new channel to the specified offering.
    **/
    postOfferingsOfferingIdChannels(req: operations.PostOfferingsOfferingIdChannelsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdChannelsResponse>;
    /**
     * postOfferingsOfferingIdChannelsChannelIdLearners - Add learners to a group channel
     *
     * Adds a learner to a specified group channel.
    **/
    postOfferingsOfferingIdChannelsChannelIdLearners(req: operations.PostOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
}
