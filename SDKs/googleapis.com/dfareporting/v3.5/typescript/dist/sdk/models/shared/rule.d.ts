import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
     */
    assetId?: string;
    /**
     * A user-friendly name for this rule. This is a required field.
     */
    name?: string;
    /**
     * A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field.
     */
    targetingTemplateId?: string;
}
