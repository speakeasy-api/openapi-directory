package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCustomClassRequest
 * Message sent by the client for the `CreateCustomClass` method.
**/
public class CreateCustomClassRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClass")
    public CustomClass customClass;
    public CreateCustomClassRequest withCustomClass(CustomClass customClass) {
        this.customClass = customClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClassId")
    public String customClassId;
    public CreateCustomClassRequest withCustomClassId(String customClassId) {
        this.customClassId = customClassId;
        return this;
    }
}