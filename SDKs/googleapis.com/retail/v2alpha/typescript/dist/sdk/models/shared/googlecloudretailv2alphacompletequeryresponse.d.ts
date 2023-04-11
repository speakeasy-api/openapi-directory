import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult } from "./googlecloudretailv2alphacompletequeryresponseattributeresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult } from "./googlecloudretailv2alphacompletequeryresponsecompletionresult";
import { GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult } from "./googlecloudretailv2alphacompletequeryresponserecentsearchresult";
/**
 * Response of the autocomplete query.
 */
export declare class GoogleCloudRetailV2alphaCompleteQueryResponse extends SpeakeasyBase {
    /**
     * A map of matched attribute suggestions. This field is only available for "cloud-retail" dataset. Current supported keys: * `brands` * `categories`
     */
    attributeResults?: Record<string, GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult>;
    /**
     * A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance.
     */
    attributionToken?: string;
    /**
     * Results of the matching suggestions. The result list is ordered and the first result is top suggestion.
     */
    completionResults?: GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult[];
    /**
     * Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. Contact Retail Search support team if you are interested in enabling it. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower case. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens.
     */
    recentSearchResults?: GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult[];
}
