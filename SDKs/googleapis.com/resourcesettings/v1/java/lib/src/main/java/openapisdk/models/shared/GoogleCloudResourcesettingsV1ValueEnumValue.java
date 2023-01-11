package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1ValueEnumValue
 * A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.
**/
public class GoogleCloudResourcesettingsV1ValueEnumValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleCloudResourcesettingsV1ValueEnumValue withValue(String value) {
        this.value = value;
        return this;
    }
}