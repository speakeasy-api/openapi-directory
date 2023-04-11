import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingResult } from "./numericbucketingresult";
/**
 * Output only. Custom attribute histogram result.
 */
export declare class CustomAttributeHistogramResult extends SpeakeasyBase {
    /**
     * Stores the key of custom attribute the histogram is performed on.
     */
    key?: string;
    /**
     * Output only. Custom numeric bucketing result.
     */
    longValueHistogramResult?: NumericBucketingResult;
    /**
     * Stores a map from the values of string custom field associated with `key` to the number of jobs with that value in this histogram result.
     */
    stringValueHistogramResult?: Record<string, number>;
}
