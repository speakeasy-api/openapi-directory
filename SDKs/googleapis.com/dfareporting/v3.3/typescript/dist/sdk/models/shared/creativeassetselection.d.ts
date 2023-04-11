import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
 */
export declare class CreativeAssetSelection extends SpeakeasyBase {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field.
     */
    defaultAssetId?: string;
    /**
     * Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
     */
    rules?: Rule[];
}
