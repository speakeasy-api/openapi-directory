package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoutingIdentifier
 * An electronic routing identifier.
**/
public class RoutingIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RoutingIdentifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public String scheme;
    public RoutingIdentifier withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}