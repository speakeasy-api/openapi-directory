import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
import { GooglePrivacyDlpV2SummaryResult } from "./googleprivacydlpv2summaryresult";
/**
 * Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
 */
export declare class GooglePrivacyDlpV2TransformationSummary extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    field?: GooglePrivacyDlpV2FieldId;
    /**
     * The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied.
     */
    fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[];
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
    /**
     * Configuration to suppress records whose suppression conditions evaluate to true.
     */
    recordSuppress?: GooglePrivacyDlpV2RecordSuppression;
    /**
     * Collection of all transformations that took place or had an error.
     */
    results?: GooglePrivacyDlpV2SummaryResult[];
    /**
     * A rule for transforming a value.
     */
    transformation?: GooglePrivacyDlpV2PrimitiveTransformation;
    /**
     * Total size in bytes that were transformed in some way.
     */
    transformedBytes?: string;
}
