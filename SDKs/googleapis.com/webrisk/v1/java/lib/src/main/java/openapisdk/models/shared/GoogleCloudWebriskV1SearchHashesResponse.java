package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudWebriskV1SearchHashesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeExpireTime")
    public String negativeExpireTime;
    public GoogleCloudWebriskV1SearchHashesResponse withNegativeExpireTime(String negativeExpireTime) {
        this.negativeExpireTime = negativeExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threats")
    public GoogleCloudWebriskV1SearchHashesResponseThreatHash[] threats;
    public GoogleCloudWebriskV1SearchHashesResponse withThreats(GoogleCloudWebriskV1SearchHashesResponseThreatHash[] threats) {
        this.threats = threats;
        return this;
    }
}