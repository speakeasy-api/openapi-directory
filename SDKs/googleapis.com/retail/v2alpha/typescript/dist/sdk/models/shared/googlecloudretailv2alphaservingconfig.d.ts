import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2alphasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec } from "./googlecloudretailv2alphasearchrequestpersonalizationspec";
/**
 * What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.
 */
export declare enum GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum {
    DiversityTypeUnspecified = "DIVERSITY_TYPE_UNSPECIFIED",
    RuleBasedDiversity = "RULE_BASED_DIVERSITY",
    DataDrivenDiversity = "DATA_DRIVEN_DIVERSITY"
}
export declare enum GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
 */
export declare class GoogleCloudRetailV2alphaServingConfig extends SpeakeasyBase {
    /**
     * Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    boostControlIds?: string[];
    /**
     * Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string;
    /**
     * How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
     */
    diversityLevel?: string;
    /**
     * What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.
     */
    diversityType?: GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
    /**
     * Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    doNotAssociateControlIds?: string[];
    /**
     * The specifications of dynamically generated facets.
     */
    dynamicFacetSpec?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
    /**
     * Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
     */
    enableCategoryFilterLevel?: string;
    /**
     * Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    facetControlIds?: string[];
    /**
     * Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    filterControlIds?: string[];
    /**
     * Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    ignoreControlIds?: string[];
    /**
     * The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.
     */
    modelId?: string;
    /**
     * Immutable. Fully qualified name `projects/* /locations/global/catalogs/* /servingConfig/*`
     */
    name?: string;
    /**
     * Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    onewaySynonymsControlIds?: string[];
    /**
     * The specification for personalization.
     */
    personalizationSpec?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
    /**
     * How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.
     */
    priceRerankingLevel?: string;
    /**
     * Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    redirectControlIds?: string[];
    /**
     * Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    replacementControlIds?: string[];
    /**
     * Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.
     */
    solutionTypes?: GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[];
    /**
     * Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.
     */
    twowaySynonymsControlIds?: string[];
}
