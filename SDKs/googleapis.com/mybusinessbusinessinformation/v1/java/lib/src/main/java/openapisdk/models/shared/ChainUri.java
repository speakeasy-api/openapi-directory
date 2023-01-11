package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChainUri
 * Url to be used when displaying the chain.
**/
public class ChainUri {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ChainUri withUri(String uri) {
        this.uri = uri;
        return this;
    }
}