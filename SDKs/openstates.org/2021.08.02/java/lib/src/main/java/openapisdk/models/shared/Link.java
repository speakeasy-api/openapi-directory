package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link {
    @JsonProperty("note")
    public String note;
    public Link withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Link withUrl(String url) {
        this.url = url;
        return this;
    }
}