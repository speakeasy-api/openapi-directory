package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HiuConsentRequestStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentRequest")
    public HiuConsentRequestStatusConsentRequest consentRequest;
    public HiuConsentRequestStatus withConsentRequest(HiuConsentRequestStatusConsentRequest consentRequest) {
        this.consentRequest = consentRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public HiuConsentRequestStatus withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public HiuConsentRequestStatus withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("resp")
    public RequestReference resp;
    public HiuConsentRequestStatus withResp(RequestReference resp) {
        this.resp = resp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public HiuConsentRequestStatus withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}