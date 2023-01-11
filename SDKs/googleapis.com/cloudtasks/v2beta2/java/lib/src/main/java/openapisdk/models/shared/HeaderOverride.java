package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeaderOverride
 * Wraps the Header object.
**/
public class HeaderOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public Header header;
    public HeaderOverride withHeader(Header header) {
        this.header = header;
        return this;
    }
}