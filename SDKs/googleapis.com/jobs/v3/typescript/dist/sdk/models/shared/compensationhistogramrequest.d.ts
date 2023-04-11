import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingOption } from "./numericbucketingoption";
/**
 * Required. Type of the request, representing which field the histogramming should be performed over. A single request can only specify one histogram of each `CompensationHistogramRequestType`.
 */
export declare enum CompensationHistogramRequestTypeEnum {
    CompensationHistogramRequestTypeUnspecified = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED",
    Base = "BASE",
    AnnualizedBase = "ANNUALIZED_BASE",
    AnnualizedTotal = "ANNUALIZED_TOTAL"
}
/**
 * Input only. Compensation based histogram request.
 */
export declare class CompensationHistogramRequest extends SpeakeasyBase {
    /**
     * Input only. Use this field to specify bucketing option for the histogram search response.
     */
    bucketingOption?: NumericBucketingOption;
    /**
     * Required. Type of the request, representing which field the histogramming should be performed over. A single request can only specify one histogram of each `CompensationHistogramRequestType`.
     */
    type?: CompensationHistogramRequestTypeEnum;
}
