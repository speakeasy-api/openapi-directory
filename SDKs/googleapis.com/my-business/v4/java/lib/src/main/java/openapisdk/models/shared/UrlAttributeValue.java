package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlAttributeValue
 * Values for an attribute with a `value_type` of URL.
**/
public class UrlAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UrlAttributeValue withUrl(String url) {
        this.url = url;
        return this;
    }
}