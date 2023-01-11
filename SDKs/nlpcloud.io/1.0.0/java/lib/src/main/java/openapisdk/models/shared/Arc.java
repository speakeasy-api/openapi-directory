package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Arc {
    @JsonProperty("dir")
    public String dir;
    public Arc withDir(String dir) {
        this.dir = dir;
        return this;
    }
    @JsonProperty("end")
    public Long end;
    public Arc withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public Arc withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("start")
    public Long start;
    public Arc withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public Arc withText(String text) {
        this.text = text;
        return this;
    }
}