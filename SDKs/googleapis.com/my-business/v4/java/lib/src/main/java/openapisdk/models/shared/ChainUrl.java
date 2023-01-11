package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChainUrl
 * Url to be used when displaying the chain.
**/
public class ChainUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ChainUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}