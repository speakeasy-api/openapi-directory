package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedsCustomBatchRequestEntry
 * A batch entry encoding a single non-batch datafeeds request.
**/
public class DatafeedsCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public DatafeedsCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeed")
    public Datafeed datafeed;
    public DatafeedsCustomBatchRequestEntry withDatafeed(Datafeed datafeed) {
        this.datafeed = datafeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeedId")
    public String datafeedId;
    public DatafeedsCustomBatchRequestEntry withDatafeedId(String datafeedId) {
        this.datafeedId = datafeedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public DatafeedsCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public DatafeedsCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
}