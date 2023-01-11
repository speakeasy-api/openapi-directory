package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Urls
 * List of URLs
**/
public class Urls {
    @JsonProperty("urls")
    public String[] urls;
    public Urls withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}