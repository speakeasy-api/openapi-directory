import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataFilterLabelMatch } from "./metadatafilterlabelmatch";
/**
 * Specifies how individual filter label matches within the list of filterLabels and contributes toward the overall metadataFilter match. Supported values are: - MATCH_ANY: at least one of the filterLabels must have a matching label in the provided metadata. - MATCH_ALL: all filterLabels must have matching labels in the provided metadata.
 */
export declare enum MetadataFilterFilterMatchCriteriaEnum {
    MatchAll = "MATCH_ALL",
    MatchAny = "MATCH_ANY",
    NotSet = "NOT_SET"
}
/**
 * Opaque filter criteria used by load balancers to restrict routing configuration to a limited set of load balancing proxies. Proxies and sidecars involved in load balancing would typically present metadata to the load balancers that need to match criteria specified here. If a match takes place, the relevant configuration is made available to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. An example for using metadataFilters would be: if load balancing involves Envoys, they receive routing configuration when values in metadataFilters match values supplied in of their XDS requests to loadbalancers.
 */
export declare class MetadataFilter extends SpeakeasyBase {
    /**
     * The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list must not be empty and can have at the most 64 entries.
     */
    filterLabels?: MetadataFilterLabelMatch[];
    /**
     * Specifies how individual filter label matches within the list of filterLabels and contributes toward the overall metadataFilter match. Supported values are: - MATCH_ANY: at least one of the filterLabels must have a matching label in the provided metadata. - MATCH_ALL: all filterLabels must have matching labels in the provided metadata.
     */
    filterMatchCriteria?: MetadataFilterFilterMatchCriteriaEnum;
}
