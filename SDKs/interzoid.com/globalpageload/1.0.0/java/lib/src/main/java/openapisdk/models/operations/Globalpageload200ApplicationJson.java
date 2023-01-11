package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Globalpageload200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Globalpageload200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Contents")
    public String contents;
    public Globalpageload200ApplicationJson withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Globalpageload200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Origin")
    public String origin;
    public Globalpageload200ApplicationJson withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageResponseStatus")
    public String pageResponseStatus;
    public Globalpageload200ApplicationJson withPageResponseStatus(String pageResponseStatus) {
        this.pageResponseStatus = pageResponseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Seconds")
    public String seconds;
    public Globalpageload200ApplicationJson withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}