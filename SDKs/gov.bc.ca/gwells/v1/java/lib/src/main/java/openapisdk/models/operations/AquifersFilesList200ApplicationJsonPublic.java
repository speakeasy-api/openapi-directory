package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AquifersFilesList200ApplicationJsonPublic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AquifersFilesList200ApplicationJsonPublic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AquifersFilesList200ApplicationJsonPublic withUrl(String url) {
        this.url = url;
        return this;
    }
}