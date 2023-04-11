import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset.
 */
export declare enum GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * The specifications of dynamically generated facets.
 */
export declare class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
    /**
     * Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset.
     */
    mode?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
}
