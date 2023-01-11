package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteVerificationWebResourceGettokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public SiteVerificationWebResourceGettokenResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public SiteVerificationWebResourceGettokenResponse withToken(String token) {
        this.token = token;
        return this;
    }
}