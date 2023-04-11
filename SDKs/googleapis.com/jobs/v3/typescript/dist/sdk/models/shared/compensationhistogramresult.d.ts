import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingResult } from "./numericbucketingresult";
/**
 * Type of the request, corresponding to CompensationHistogramRequest.type.
 */
export declare enum CompensationHistogramResultTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED",
    Base = "BASE",
    AnnualizedBase = "ANNUALIZED_BASE",
    AnnualizedTotal = "ANNUALIZED_TOTAL"
}
/**
 * Output only. Compensation based histogram result.
 */
export declare class CompensationHistogramResult extends SpeakeasyBase {
    /**
     * Output only. Custom numeric bucketing result.
     */
    result?: NumericBucketingResult;
    /**
     * Type of the request, corresponding to CompensationHistogramRequest.type.
     */
    type?: CompensationHistogramResultTypeEnum;
}
