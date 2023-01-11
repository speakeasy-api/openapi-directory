package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ParameterDefinition
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
**/
public class GoogleCloudChannelV1ParameterDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedValues")
    public GoogleCloudChannelV1Value[] allowedValues;
    public GoogleCloudChannelV1ParameterDefinition withAllowedValues(GoogleCloudChannelV1Value[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GoogleCloudChannelV1Value maxValue;
    public GoogleCloudChannelV1ParameterDefinition withMaxValue(GoogleCloudChannelV1Value maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GoogleCloudChannelV1Value minValue;
    public GoogleCloudChannelV1ParameterDefinition withMinValue(GoogleCloudChannelV1Value minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1ParameterDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public GoogleCloudChannelV1ParameterDefinition withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterType")
    public GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum parameterType;
    public GoogleCloudChannelV1ParameterDefinition withParameterType(GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum parameterType) {
        this.parameterType = parameterType;
        return this;
    }
}