package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TokenError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_status")
    public TokenErrorAccountStatusEnum accountStatus;
    public TokenError withAccountStatus(TokenErrorAccountStatusEnum accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public TokenError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public TokenError withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_code")
    public Integer httpCode;
    public TokenError withHttpCode(Integer httpCode) {
        this.httpCode = httpCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TokenError withMessage(String message) {
        this.message = message;
        return this;
    }
}