import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filtering option that filters entities by their entity IDs.
 */
export declare class IdFilter extends SpeakeasyBase {
    /**
     * YouTube Ads to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    adGroupAdIds?: string[];
    /**
     * YouTube Ad Groups to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    adGroupIds?: string[];
    /**
     * Campaigns to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    campaignIds?: string[];
    /**
     * Insertion Orders to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    insertionOrderIds?: string[];
    /**
     * Line Items to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    lineItemIds?: string[];
    /**
     * Media Products to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.
     */
    mediaProductIds?: string[];
}
