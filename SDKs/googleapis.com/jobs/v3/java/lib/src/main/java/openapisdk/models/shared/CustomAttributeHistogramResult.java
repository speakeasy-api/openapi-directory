package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomAttributeHistogramResult
 * Output only. Custom attribute histogram result.
**/
public class CustomAttributeHistogramResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public CustomAttributeHistogramResult withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longValueHistogramResult")
    public NumericBucketingResult longValueHistogramResult;
    public CustomAttributeHistogramResult withLongValueHistogramResult(NumericBucketingResult longValueHistogramResult) {
        this.longValueHistogramResult = longValueHistogramResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValueHistogramResult")
    public java.util.Map<String, Integer> stringValueHistogramResult;
    public CustomAttributeHistogramResult withStringValueHistogramResult(java.util.Map<String, Integer> stringValueHistogramResult) {
        this.stringValueHistogramResult = stringValueHistogramResult;
        return this;
    }
}