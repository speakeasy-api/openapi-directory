package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystemVersionsListResponse
 * Operating System Version List Response
**/
public class OperatingSystemVersionsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OperatingSystemVersionsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemVersions")
    public OperatingSystemVersion[] operatingSystemVersions;
    public OperatingSystemVersionsListResponse withOperatingSystemVersions(OperatingSystemVersion[] operatingSystemVersions) {
        this.operatingSystemVersions = operatingSystemVersions;
        return this;
    }
}