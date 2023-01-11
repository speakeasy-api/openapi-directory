package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersPartialUpdateUserInput {
    @JsonProperty("attributes")
    public UsersPartialUpdateUserAttributesInput attributes;
    public UsersPartialUpdateUserInput withAttributes(UsersPartialUpdateUserAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
}