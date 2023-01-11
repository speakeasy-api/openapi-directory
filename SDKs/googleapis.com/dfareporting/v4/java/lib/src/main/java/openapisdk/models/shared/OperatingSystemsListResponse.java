package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystemsListResponse
 * Operating System List Response
**/
public class OperatingSystemsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OperatingSystemsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystems")
    public OperatingSystem[] operatingSystems;
    public OperatingSystemsListResponse withOperatingSystems(OperatingSystem[] operatingSystems) {
        this.operatingSystems = operatingSystems;
        return this;
    }
}