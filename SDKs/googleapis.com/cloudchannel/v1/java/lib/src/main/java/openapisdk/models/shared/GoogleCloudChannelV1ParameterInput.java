package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ParameterInput
 * Definition for extended entitlement parameters.
**/
public class GoogleCloudChannelV1ParameterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1ParameterInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GoogleCloudChannelV1Value value;
    public GoogleCloudChannelV1ParameterInput withValue(GoogleCloudChannelV1Value value) {
        this.value = value;
        return this;
    }
}