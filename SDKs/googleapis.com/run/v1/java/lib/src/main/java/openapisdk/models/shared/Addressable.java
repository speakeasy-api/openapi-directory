package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Addressable
 * Information for connecting over HTTP(s).
**/
public class Addressable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Addressable withUrl(String url) {
        this.url = url;
        return this;
    }
}