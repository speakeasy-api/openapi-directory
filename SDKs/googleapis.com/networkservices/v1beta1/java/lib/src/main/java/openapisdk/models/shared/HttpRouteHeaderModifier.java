package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteHeaderModifier
 * The specification for modifying HTTP header in HTTP request and HTTP response.
**/
public class HttpRouteHeaderModifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public java.util.Map<String, String> add;
    public HttpRouteHeaderModifier withAdd(java.util.Map<String, String> add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove")
    public String[] remove;
    public HttpRouteHeaderModifier withRemove(String[] remove) {
        this.remove = remove;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("set")
    public java.util.Map<String, String> set;
    public HttpRouteHeaderModifier withSet(java.util.Map<String, String> set) {
        this.set = set;
        return this;
    }
}