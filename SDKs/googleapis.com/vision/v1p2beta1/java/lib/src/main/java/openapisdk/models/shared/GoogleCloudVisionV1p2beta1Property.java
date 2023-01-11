package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1Property
 * A `Property` consists of a user-supplied name/value pair.
**/
public class GoogleCloudVisionV1p2beta1Property {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudVisionV1p2beta1Property withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uint64Value")
    public String uint64Value;
    public GoogleCloudVisionV1p2beta1Property withUint64Value(String uint64Value) {
        this.uint64Value = uint64Value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleCloudVisionV1p2beta1Property withValue(String value) {
        this.value = value;
        return this;
    }
}