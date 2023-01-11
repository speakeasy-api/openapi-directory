package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinerPerforation {
    @JsonProperty("end")
    public String end;
    public LinerPerforation withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public LinerPerforation withStart(String start) {
        this.start = start;
        return this;
    }
}