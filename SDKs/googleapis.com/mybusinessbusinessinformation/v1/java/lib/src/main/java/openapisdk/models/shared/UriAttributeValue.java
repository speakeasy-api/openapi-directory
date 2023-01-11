package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UriAttributeValue
 * Values for an attribute with a `value_type` of URL.
**/
public class UriAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public UriAttributeValue withUri(String uri) {
        this.uri = uri;
        return this;
    }
}