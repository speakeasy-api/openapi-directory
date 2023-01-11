package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrbitClass {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_class_description")
    public String orbitClassDescription;
    public OrbitClass withOrbitClassDescription(String orbitClassDescription) {
        this.orbitClassDescription = orbitClassDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_class_range")
    public String orbitClassRange;
    public OrbitClass withOrbitClassRange(String orbitClassRange) {
        this.orbitClassRange = orbitClassRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orbit_class_type")
    public OrbitClassOrbitClassTypeEnum orbitClassType;
    public OrbitClass withOrbitClassType(OrbitClassOrbitClassTypeEnum orbitClassType) {
        this.orbitClassType = orbitClassType;
        return this;
    }
}