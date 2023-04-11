import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
/**
 * A type of transformation that is applied over structured data such as a table.
 */
export declare class GooglePrivacyDlpV2RecordTransformations extends SpeakeasyBase {
    /**
     * Transform the record by applying various field transformations.
     */
    fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];
    /**
     * Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.
     */
    recordSuppressions?: GooglePrivacyDlpV2RecordSuppression[];
}
