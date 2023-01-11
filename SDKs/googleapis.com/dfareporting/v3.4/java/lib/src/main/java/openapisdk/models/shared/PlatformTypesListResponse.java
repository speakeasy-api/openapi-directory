package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlatformTypesListResponse
 * Platform Type List Response
**/
public class PlatformTypesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlatformTypesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformTypes")
    public PlatformType[] platformTypes;
    public PlatformTypesListResponse withPlatformTypes(PlatformType[] platformTypes) {
        this.platformTypes = platformTypes;
        return this;
    }
}