import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create campaign
     *
     * @remarks
     * Creates a new campaign
     */
    createCampaign(req: shared.CreateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.CreateCampaignResponse>;
    /**
     * Create segment
     *
     * @remarks
     * Create a segment
     */
    createSegment(req: shared.CreateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSegmentResponse>;
    /**
     * Query campaigns
     *
     * @remarks
     * Query campaigns
     */
    queryCampaigns(req: operations.QueryCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.QueryCampaignsResponse>;
    /**
     * Query recipients
     *
     * @remarks
     * Query recipients
     */
    queryRecipients(req: operations.QueryRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.QueryRecipientsResponse>;
    /**
     * Query segments
     *
     * @remarks
     * Query segments
     */
    querySegments(req: operations.QuerySegmentsRequest, config?: AxiosRequestConfig): Promise<operations.QuerySegmentsResponse>;
}
