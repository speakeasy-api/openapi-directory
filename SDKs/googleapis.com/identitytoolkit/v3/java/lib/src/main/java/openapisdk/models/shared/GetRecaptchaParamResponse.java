package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecaptchaParamResponse
 * Response of getting recaptcha param.
**/
public class GetRecaptchaParamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GetRecaptchaParamResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaSiteKey")
    public String recaptchaSiteKey;
    public GetRecaptchaParamResponse withRecaptchaSiteKey(String recaptchaSiteKey) {
        this.recaptchaSiteKey = recaptchaSiteKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaStoken")
    public String recaptchaStoken;
    public GetRecaptchaParamResponse withRecaptchaStoken(String recaptchaStoken) {
        this.recaptchaStoken = recaptchaStoken;
        return this;
    }
}