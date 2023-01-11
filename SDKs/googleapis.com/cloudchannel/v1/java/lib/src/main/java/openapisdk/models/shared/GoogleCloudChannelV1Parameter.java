package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Parameter
 * Definition for extended entitlement parameters.
**/
public class GoogleCloudChannelV1Parameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editable")
    public Boolean editable;
    public GoogleCloudChannelV1Parameter withEditable(Boolean editable) {
        this.editable = editable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Parameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GoogleCloudChannelV1Value value;
    public GoogleCloudChannelV1Parameter withValue(GoogleCloudChannelV1Value value) {
        this.value = value;
        return this;
    }
}