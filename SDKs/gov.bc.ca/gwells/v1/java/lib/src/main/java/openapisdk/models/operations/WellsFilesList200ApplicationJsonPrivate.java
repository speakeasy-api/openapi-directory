package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WellsFilesList200ApplicationJsonPrivate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WellsFilesList200ApplicationJsonPrivate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WellsFilesList200ApplicationJsonPrivate withUrl(String url) {
        this.url = url;
        return this;
    }
}