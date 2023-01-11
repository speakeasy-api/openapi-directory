package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Options
 * Options allows customized resource handling by Deployment Manager.
**/
public class Options {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asyncOptions")
    public AsyncOptions[] asyncOptions;
    public Options withAsyncOptions(AsyncOptions[] asyncOptions) {
        this.asyncOptions = asyncOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputMappings")
    public InputMapping[] inputMappings;
    public Options withInputMappings(InputMapping[] inputMappings) {
        this.inputMappings = inputMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameProperty")
    public String nameProperty;
    public Options withNameProperty(String nameProperty) {
        this.nameProperty = nameProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationOptions")
    public ValidationOptions validationOptions;
    public Options withValidationOptions(ValidationOptions validationOptions) {
        this.validationOptions = validationOptions;
        return this;
    }
}