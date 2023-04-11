import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of Human Agent Assistant API feature to request.
 */
export declare enum GoogleCloudDialogflowV2SuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    Faq = "FAQ",
    SmartReply = "SMART_REPLY"
}
/**
 * The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
 */
export declare class GoogleCloudDialogflowV2SuggestionFeature extends SpeakeasyBase {
    /**
     * Type of Human Agent Assistant API feature to request.
     */
    type?: GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
}
