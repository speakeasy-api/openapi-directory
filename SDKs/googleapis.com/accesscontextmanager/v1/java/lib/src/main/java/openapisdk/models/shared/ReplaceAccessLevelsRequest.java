package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceAccessLevelsRequest
 * A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
**/
public class ReplaceAccessLevelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public AccessLevel[] accessLevels;
    public ReplaceAccessLevelsRequest withAccessLevels(AccessLevel[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ReplaceAccessLevelsRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}