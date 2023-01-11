package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedstatusesCustomBatchRequestEntry
 * A batch entry encoding a single non-batch datafeedstatuses request.
**/
public class DatafeedstatusesCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public DatafeedstatusesCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public DatafeedstatusesCustomBatchRequestEntry withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeedId")
    public String datafeedId;
    public DatafeedstatusesCustomBatchRequestEntry withDatafeedId(String datafeedId) {
        this.datafeedId = datafeedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DatafeedstatusesCustomBatchRequestEntry withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public DatafeedstatusesCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public DatafeedstatusesCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
}