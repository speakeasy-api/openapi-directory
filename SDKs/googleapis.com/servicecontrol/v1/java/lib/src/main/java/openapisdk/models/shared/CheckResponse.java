package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckResponse
 * Response message for the Check method.
**/
public class CheckResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkErrors")
    public CheckError[] checkErrors;
    public CheckResponse withCheckErrors(CheckError[] checkErrors) {
        this.checkErrors = checkErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkInfo")
    public CheckInfo checkInfo;
    public CheckResponse withCheckInfo(CheckInfo checkInfo) {
        this.checkInfo = checkInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public CheckResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaInfo")
    public QuotaInfo quotaInfo;
    public CheckResponse withQuotaInfo(QuotaInfo quotaInfo) {
        this.quotaInfo = quotaInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public CheckResponse withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRolloutId")
    public String serviceRolloutId;
    public CheckResponse withServiceRolloutId(String serviceRolloutId) {
        this.serviceRolloutId = serviceRolloutId;
        return this;
    }
}