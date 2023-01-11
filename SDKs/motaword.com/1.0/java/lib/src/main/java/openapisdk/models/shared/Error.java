package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Error withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public Error withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_code")
    public Integer httpCode;
    public Error withHttpCode(Integer httpCode) {
        this.httpCode = httpCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
}