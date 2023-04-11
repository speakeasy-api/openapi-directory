import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaRule } from "./googlecloudretailv2alpharule";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
export declare enum GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum {
    SearchSolutionUseCaseUnspecified = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED",
    SearchSolutionUseCaseSearch = "SEARCH_SOLUTION_USE_CASE_SEARCH",
    SearchSolutionUseCaseBrowse = "SEARCH_SOLUTION_USE_CASE_BROWSE"
}
export declare enum GoogleCloudRetailV2alphaControlSolutionTypesEnum {
    SolutionTypeUnspecified = "SOLUTION_TYPE_UNSPECIFIED",
    SolutionTypeRecommendation = "SOLUTION_TYPE_RECOMMENDATION",
    SolutionTypeSearch = "SOLUTION_TYPE_SEARCH"
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
 */
export declare class GoogleCloudRetailV2alphaControl extends SpeakeasyBase {
    /**
     * Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.
     */
    associatedServingConfigIds?: string[];
    /**
     * Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.
     */
    displayName?: string;
    /**
     * A facet specification to perform faceted search.
     */
    facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;
    /**
     * Immutable. Fully qualified name `projects/* /locations/global/catalogs/* /controls/*`
     */
    name?: string;
    /**
     * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
     */
    rule?: GoogleCloudRetailV2alphaRule;
    /**
     * Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.
     */
    searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];
    /**
     * Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.
     */
    solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
 */
export declare class GoogleCloudRetailV2alphaControlInput extends SpeakeasyBase {
    /**
     * Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.
     */
    displayName?: string;
    /**
     * A facet specification to perform faceted search.
     */
    facetSpec?: GoogleCloudRetailV2alphaSearchRequestFacetSpec;
    /**
     * Immutable. Fully qualified name `projects/* /locations/global/catalogs/* /controls/*`
     */
    name?: string;
    /**
     * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
     */
    rule?: GoogleCloudRetailV2alphaRule;
    /**
     * Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.
     */
    searchSolutionUseCase?: GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[];
    /**
     * Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.
     */
    solutionTypes?: GoogleCloudRetailV2alphaControlSolutionTypesEnum[];
}
