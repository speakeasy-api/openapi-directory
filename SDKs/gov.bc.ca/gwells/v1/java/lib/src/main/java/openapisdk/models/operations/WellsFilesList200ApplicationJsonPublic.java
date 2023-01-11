package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WellsFilesList200ApplicationJsonPublic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WellsFilesList200ApplicationJsonPublic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WellsFilesList200ApplicationJsonPublic withUrl(String url) {
        this.url = url;
        return this;
    }
}