import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Outcome of the transformation.
 */
export declare enum GooglePrivacyDlpV2SummaryResultCodeEnum {
    TransformationResultCodeUnspecified = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED",
    Success = "SUCCESS",
    Error = "ERROR"
}
/**
 * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
 */
export declare class GooglePrivacyDlpV2SummaryResult extends SpeakeasyBase {
    /**
     * Outcome of the transformation.
     */
    code?: GooglePrivacyDlpV2SummaryResultCodeEnum;
    /**
     * Number of transformations counted by this result.
     */
    count?: string;
    /**
     * A place for warnings or errors to show up if a transformation didn't work as expected.
     */
    details?: string;
}
