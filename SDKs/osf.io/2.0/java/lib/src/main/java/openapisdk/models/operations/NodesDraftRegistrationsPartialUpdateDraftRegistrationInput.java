package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodesDraftRegistrationsPartialUpdateDraftRegistrationInput {
    @JsonProperty("attributes")
    public NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput attributes;
    public NodesDraftRegistrationsPartialUpdateDraftRegistrationInput withAttributes(NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
}