package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Photo
 * Photo information for a user.
**/
public class Photo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Photo withUrl(String url) {
        this.url = url;
        return this;
    }
}