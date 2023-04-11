import { SpeakeasyBase } from "../../../internal/utils";
import { NumericBucketingOption } from "./numericbucketingoption";
/**
 * Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
 */
export declare class CustomAttributeHistogramRequest extends SpeakeasyBase {
    /**
     * Required. Specifies the custom field key to perform a histogram on. If specified without `long_value_histogram_bucketing_option`, histogram on string values of the given `key` is triggered, otherwise histogram is performed on long values.
     */
    key?: string;
    /**
     * Input only. Use this field to specify bucketing option for the histogram search response.
     */
    longValueHistogramBucketingOption?: NumericBucketingOption;
    /**
     * Optional. If set to true, the response includes the histogram value for each key as a string.
     */
    stringValueHistogram?: boolean;
}
