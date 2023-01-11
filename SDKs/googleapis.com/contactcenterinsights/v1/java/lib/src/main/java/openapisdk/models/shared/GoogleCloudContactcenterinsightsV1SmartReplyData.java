package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1SmartReplyData
 * Agent Assist Smart Reply data.
**/
public class GoogleCloudContactcenterinsightsV1SmartReplyData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceScore")
    public Double confidenceScore;
    public GoogleCloudContactcenterinsightsV1SmartReplyData withConfidenceScore(Double confidenceScore) {
        this.confidenceScore = confidenceScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GoogleCloudContactcenterinsightsV1SmartReplyData withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryRecord")
    public String queryRecord;
    public GoogleCloudContactcenterinsightsV1SmartReplyData withQueryRecord(String queryRecord) {
        this.queryRecord = queryRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reply")
    public String reply;
    public GoogleCloudContactcenterinsightsV1SmartReplyData withReply(String reply) {
        this.reply = reply;
        return this;
    }
}