package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Webcast {
    @JsonProperty("channel")
    public String channel;
    public Webcast withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public Webcast withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public String file;
    public Webcast withFile(String file) {
        this.file = file;
        return this;
    }
    @JsonProperty("type")
    public WebcastTypeEnum type;
    public Webcast withType(WebcastTypeEnum type) {
        this.type = type;
        return this;
    }
}