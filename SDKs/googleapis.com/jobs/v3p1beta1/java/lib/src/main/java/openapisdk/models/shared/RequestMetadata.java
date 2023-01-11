package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestMetadata
 * Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
**/
public class RequestMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceInfo")
    public DeviceInfo deviceInfo;
    public RequestMetadata withDeviceInfo(DeviceInfo deviceInfo) {
        this.deviceInfo = deviceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public RequestMetadata withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public RequestMetadata withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public RequestMetadata withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}