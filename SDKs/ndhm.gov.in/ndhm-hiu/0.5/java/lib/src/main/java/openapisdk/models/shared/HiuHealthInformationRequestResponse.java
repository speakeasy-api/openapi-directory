package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HiuHealthInformationRequestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public HiuHealthInformationRequestResponse withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiRequest")
    public HiuHealthInformationRequestResponseHiRequest hiRequest;
    public HiuHealthInformationRequestResponse withHiRequest(HiuHealthInformationRequestResponseHiRequest hiRequest) {
        this.hiRequest = hiRequest;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public HiuHealthInformationRequestResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("resp")
    public RequestReference resp;
    public HiuHealthInformationRequestResponse withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HiuHealthInformationRequestResponse withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}