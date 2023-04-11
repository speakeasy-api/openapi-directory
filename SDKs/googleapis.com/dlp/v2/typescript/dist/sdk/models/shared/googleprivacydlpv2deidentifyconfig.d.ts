import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ImageTransformations } from "./googleprivacydlpv2imagetransformations";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2RecordTransformations } from "./googleprivacydlpv2recordtransformations";
import { GooglePrivacyDlpV2TransformationErrorHandling } from "./googleprivacydlpv2transformationerrorhandling";
/**
 * The configuration that controls how the data will change.
 */
export declare class GooglePrivacyDlpV2DeidentifyConfig extends SpeakeasyBase {
    /**
     * A type of transformation that is applied over images.
     */
    imageTransformations?: GooglePrivacyDlpV2ImageTransformations;
    /**
     * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
     */
    infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
    /**
     * A type of transformation that is applied over structured data such as a table.
     */
    recordTransformations?: GooglePrivacyDlpV2RecordTransformations;
    /**
     * How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.
     */
    transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
}
