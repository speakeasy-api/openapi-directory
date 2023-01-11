package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestAttributes
 * A guest attributes.
**/
public class GuestAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryPath")
    public String queryPath;
    public GuestAttributes withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryValue")
    public GuestAttributesValue queryValue;
    public GuestAttributes withQueryValue(GuestAttributesValue queryValue) {
        this.queryValue = queryValue;
        return this;
    }
}