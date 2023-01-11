package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Cable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public Cable withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Cable withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Cable withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public Cable withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length_unit")
    public CableLengthUnit lengthUnit;
    public Cable withLengthUnit(CableLengthUnit lengthUnit) {
        this.lengthUnit = lengthUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CableStatus status;
    public Cable withStatus(CableStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termination_a")
    public java.util.Map<String, String> terminationA;
    public Cable withTerminationA(java.util.Map<String, String> terminationA) {
        this.terminationA = terminationA;
        return this;
    }
    @JsonProperty("termination_a_id")
    public Long terminationAId;
    public Cable withTerminationAId(Long terminationAId) {
        this.terminationAId = terminationAId;
        return this;
    }
    @JsonProperty("termination_a_type")
    public String terminationAType;
    public Cable withTerminationAType(String terminationAType) {
        this.terminationAType = terminationAType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termination_b")
    public java.util.Map<String, String> terminationB;
    public Cable withTerminationB(java.util.Map<String, String> terminationB) {
        this.terminationB = terminationB;
        return this;
    }
    @JsonProperty("termination_b_id")
    public Long terminationBId;
    public Cable withTerminationBId(Long terminationBId) {
        this.terminationBId = terminationBId;
        return this;
    }
    @JsonProperty("termination_b_type")
    public String terminationBType;
    public Cable withTerminationBType(String terminationBType) {
        this.terminationBType = terminationBType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CableTypeEnum type;
    public Cable withType(CableTypeEnum type) {
        this.type = type;
        return this;
    }
}