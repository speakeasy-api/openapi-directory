package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Word {
    @JsonProperty("tag")
    public String tag;
    public Word withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public Word withText(String text) {
        this.text = text;
        return this;
    }
}