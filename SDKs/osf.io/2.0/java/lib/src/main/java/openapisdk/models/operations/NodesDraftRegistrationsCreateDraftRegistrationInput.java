package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodesDraftRegistrationsCreateDraftRegistrationInput {
    @JsonProperty("attributes")
    public NodesDraftRegistrationsCreateDraftRegistrationAttributesInput attributes;
    public NodesDraftRegistrationsCreateDraftRegistrationInput withAttributes(NodesDraftRegistrationsCreateDraftRegistrationAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
}