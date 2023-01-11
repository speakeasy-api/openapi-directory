package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntityOut {
    @JsonProperty("end")
    public Long end;
    public EntityOut withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public Long start;
    public EntityOut withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public EntityOut withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EntityOut withType(String type) {
        this.type = type;
        return this;
    }
}