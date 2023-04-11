import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeTransformation } from "./googleprivacydlpv2infotypetransformation";
/**
 * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
 */
export declare class GooglePrivacyDlpV2InfoTypeTransformations extends SpeakeasyBase {
    /**
     * Required. Transformation for each infoType. Cannot specify more than one for a given infoType.
     */
    transformations?: GooglePrivacyDlpV2InfoTypeTransformation[];
}
