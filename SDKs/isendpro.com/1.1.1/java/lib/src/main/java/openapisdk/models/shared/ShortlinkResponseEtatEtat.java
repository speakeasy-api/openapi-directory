package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShortlinkResponseEtatEtat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Double code;
    public ShortlinkResponseEtatEtat withCode(Double code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ShortlinkResponseEtatEtat withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortlink")
    public String shortlink;
    public ShortlinkResponseEtatEtat withShortlink(String shortlink) {
        this.shortlink = shortlink;
        return this;
    }
}