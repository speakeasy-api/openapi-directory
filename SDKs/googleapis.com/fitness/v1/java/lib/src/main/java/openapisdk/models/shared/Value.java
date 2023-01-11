package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Value
 * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
**/
public class Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fpVal")
    public Double fpVal;
    public Value withFpVal(Double fpVal) {
        this.fpVal = fpVal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intVal")
    public Integer intVal;
    public Value withIntVal(Integer intVal) {
        this.intVal = intVal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapVal")
    public ValueMapValEntry[] mapVal;
    public Value withMapVal(ValueMapValEntry[] mapVal) {
        this.mapVal = mapVal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringVal")
    public String stringVal;
    public Value withStringVal(String stringVal) {
        this.stringVal = stringVal;
        return this;
    }
}