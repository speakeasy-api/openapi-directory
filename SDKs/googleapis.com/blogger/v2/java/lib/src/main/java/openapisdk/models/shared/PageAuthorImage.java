package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PageAuthorImage
 * The creator's avatar.
**/
public class PageAuthorImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PageAuthorImage withUrl(String url) {
        this.url = url;
        return this;
    }
}