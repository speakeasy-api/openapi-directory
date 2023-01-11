package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1Room
 * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
**/
public class GoogleHomeEnterpriseSdmV1Room {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleHomeEnterpriseSdmV1Room withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traits")
    public java.util.Map<String, Object> traits;
    public GoogleHomeEnterpriseSdmV1Room withTraits(java.util.Map<String, Object> traits) {
        this.traits = traits;
        return this;
    }
}