package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveDistributionLinksResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatus")
    public String httpStatus;
    public RetrieveDistributionLinksResponseMeta withHttpStatus(String httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RetrieveDistributionLinksResponseMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}