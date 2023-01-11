package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1Structure
 * Structure resource represents an instance of enterprise managed home or hotel room.
**/
public class GoogleHomeEnterpriseSdmV1Structure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleHomeEnterpriseSdmV1Structure withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traits")
    public java.util.Map<String, Object> traits;
    public GoogleHomeEnterpriseSdmV1Structure withTraits(java.util.Map<String, Object> traits) {
        this.traits = traits;
        return this;
    }
}