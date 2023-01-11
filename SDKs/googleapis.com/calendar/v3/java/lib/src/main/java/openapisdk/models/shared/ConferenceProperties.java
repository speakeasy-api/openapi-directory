package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedConferenceSolutionTypes")
    public String[] allowedConferenceSolutionTypes;
    public ConferenceProperties withAllowedConferenceSolutionTypes(String[] allowedConferenceSolutionTypes) {
        this.allowedConferenceSolutionTypes = allowedConferenceSolutionTypes;
        return this;
    }
}