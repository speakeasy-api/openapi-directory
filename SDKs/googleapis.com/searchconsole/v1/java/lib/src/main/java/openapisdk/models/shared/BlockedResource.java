package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlockedResource
 * Blocked resource.
**/
public class BlockedResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BlockedResource withUrl(String url) {
        this.url = url;
        return this;
    }
}