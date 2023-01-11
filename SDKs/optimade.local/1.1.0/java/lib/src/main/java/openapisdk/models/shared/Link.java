package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Link
 * A link **MUST** be represented as either: a string containing the link's URL or a link object.
**/
public class Link {
    @JsonProperty("href")
    public String href;
    public Link withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public Link withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}