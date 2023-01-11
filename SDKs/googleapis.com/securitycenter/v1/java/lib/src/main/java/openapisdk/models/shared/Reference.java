package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Reference
 * Additional Links
**/
public class Reference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Reference withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Reference withUri(String uri) {
        this.uri = uri;
        return this;
    }
}