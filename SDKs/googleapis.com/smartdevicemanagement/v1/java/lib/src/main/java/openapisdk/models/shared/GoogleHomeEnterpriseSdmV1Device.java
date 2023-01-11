package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1Device
 * Device resource represents an instance of enterprise managed device in the property.
**/
public class GoogleHomeEnterpriseSdmV1Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleHomeEnterpriseSdmV1Device withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentRelations")
    public GoogleHomeEnterpriseSdmV1ParentRelation[] parentRelations;
    public GoogleHomeEnterpriseSdmV1Device withParentRelations(GoogleHomeEnterpriseSdmV1ParentRelation[] parentRelations) {
        this.parentRelations = parentRelations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traits")
    public java.util.Map<String, Object> traits;
    public GoogleHomeEnterpriseSdmV1Device withTraits(java.util.Map<String, Object> traits) {
        this.traits = traits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleHomeEnterpriseSdmV1Device withType(String type) {
        this.type = type;
        return this;
    }
}