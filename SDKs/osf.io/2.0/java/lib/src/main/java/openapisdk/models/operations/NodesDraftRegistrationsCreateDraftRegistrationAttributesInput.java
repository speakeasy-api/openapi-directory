package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
 * The properties of the draft registration entity.
**/
public class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_metadata")
    public String registrationMetadata;
    public NodesDraftRegistrationsCreateDraftRegistrationAttributesInput withRegistrationMetadata(String registrationMetadata) {
        this.registrationMetadata = registrationMetadata;
        return this;
    }
    @JsonProperty("registration_supplement")
    public String registrationSupplement;
    public NodesDraftRegistrationsCreateDraftRegistrationAttributesInput withRegistrationSupplement(String registrationSupplement) {
        this.registrationSupplement = registrationSupplement;
        return this;
    }
}