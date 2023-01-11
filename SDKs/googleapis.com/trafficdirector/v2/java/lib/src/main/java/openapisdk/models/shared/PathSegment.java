package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathSegment
 * Specifies the segment in a path to retrieve value from Struct.
**/
public class PathSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PathSegment withKey(String key) {
        this.key = key;
        return this;
    }
}