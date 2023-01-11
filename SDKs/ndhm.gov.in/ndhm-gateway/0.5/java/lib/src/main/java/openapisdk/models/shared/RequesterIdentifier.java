package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequesterIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public String system;
    public RequesterIdentifier withSystem(String system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RequesterIdentifier withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public RequesterIdentifier withValue(String value) {
        this.value = value;
        return this;
    }
}