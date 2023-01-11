package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
 * The properties of the draft registration entity.
**/
public class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_metadata")
    public String registrationMetadata;
    public NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput withRegistrationMetadata(String registrationMetadata) {
        this.registrationMetadata = registrationMetadata;
        return this;
    }
    @JsonProperty("registration_supplement")
    public String registrationSupplement;
    public NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput withRegistrationSupplement(String registrationSupplement) {
        this.registrationSupplement = registrationSupplement;
        return this;
    }
}