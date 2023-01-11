package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomAttributeHistogramRequest
 * Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
**/
public class CustomAttributeHistogramRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public CustomAttributeHistogramRequest withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longValueHistogramBucketingOption")
    public NumericBucketingOption longValueHistogramBucketingOption;
    public CustomAttributeHistogramRequest withLongValueHistogramBucketingOption(NumericBucketingOption longValueHistogramBucketingOption) {
        this.longValueHistogramBucketingOption = longValueHistogramBucketingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValueHistogram")
    public Boolean stringValueHistogram;
    public CustomAttributeHistogramRequest withStringValueHistogram(Boolean stringValueHistogram) {
        this.stringValueHistogram = stringValueHistogram;
        return this;
    }
}