import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaCompletionInfo } from "./googleclouddiscoveryenginev1alphacompletioninfo";
import { GoogleCloudDiscoveryengineV1alphaCustomAttribute } from "./googleclouddiscoveryenginev1alphacustomattribute";
import { GoogleCloudDiscoveryengineV1alphaDocumentInfo } from "./googleclouddiscoveryenginev1alphadocumentinfo";
import { GoogleCloudDiscoveryengineV1alphaMediaInfo } from "./googleclouddiscoveryenginev1alphamediainfo";
import { GoogleCloudDiscoveryengineV1alphaPageInfo } from "./googleclouddiscoveryenginev1alphapageinfo";
import { GoogleCloudDiscoveryengineV1alphaPanelInfo } from "./googleclouddiscoveryenginev1alphapanelinfo";
import { GoogleCloudDiscoveryengineV1alphaSearchInfo } from "./googleclouddiscoveryenginev1alphasearchinfo";
import { GoogleCloudDiscoveryengineV1alphaTransactionInfo } from "./googleclouddiscoveryenginev1alphatransactioninfo";
import { GoogleCloudDiscoveryengineV1alphaUserInfo } from "./googleclouddiscoveryenginev1alphauserinfo";
/**
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
 */
export declare class GoogleCloudDiscoveryengineV1alphaUserEvent extends SpeakeasyBase {
    /**
     * Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
     */
    attributes?: Record<string, GoogleCloudDiscoveryengineV1alphaCustomAttribute>;
    /**
     * Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be one of: * PredictResponse.attribution_token for events that are the result of PredictionService.Predict. * SearchResponse.attribution_token for events that are the result of SearchService.Search. * CompleteQueryResponse.attribution_token for events that are the result of SearchService.CompleteQuery. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.
     */
    attributionToken?: string;
    /**
     * Detailed completion information including completion attribution token and clicked completion info.
     */
    completionInfo?: GoogleCloudDiscoveryengineV1alphaCompletionInfo;
    /**
     * Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean;
    /**
     * List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.
     */
    documents?: GoogleCloudDiscoveryengineV1alphaDocumentInfo[];
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string;
    /**
     * Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home > Men > Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.
     */
    eventType?: string;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchService.SearchRequest may contain a filter expression in SearchService.SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a PredictionService.PredictRequest, this field may be populated directly from PredictionService.PredictRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    filter?: string;
    /**
     * Media-specific user event information.
     */
    mediaInfo?: GoogleCloudDiscoveryengineV1alphaMediaInfo;
    /**
     * Detailed page information.
     */
    pageInfo?: GoogleCloudDiscoveryengineV1alphaPageInfo;
    /**
     * Detailed panel information associated with a user event.
     */
    panel?: GoogleCloudDiscoveryengineV1alphaPanelInfo;
    /**
     * The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[];
    /**
     * Detailed search information.
     */
    searchInfo?: GoogleCloudDiscoveryengineV1alphaSearchInfo;
    /**
     * A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix.
     */
    sessionId?: string;
    /**
     * A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end.
     */
    tagIds?: string[];
    /**
     * A transaction represents the entire purchase transaction.
     */
    transactionInfo?: GoogleCloudDiscoveryengineV1alphaTransactionInfo;
    /**
     * Information of an end user.
     */
    userInfo?: GoogleCloudDiscoveryengineV1alphaUserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.
     */
    userPseudoId?: string;
}
