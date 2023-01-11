package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Url
 * URL object
**/
public class Url {
    @JsonProperty("url")
    public String url;
    public Url withUrl(String url) {
        this.url = url;
        return this;
    }
}