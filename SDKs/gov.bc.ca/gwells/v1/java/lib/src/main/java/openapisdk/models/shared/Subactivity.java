package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Subactivity {
    @JsonProperty("description")
    public String description;
    public Subactivity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualification_set")
    public Qualification[] qualificationSet;
    public Subactivity withQualificationSet(Qualification[] qualificationSet) {
        this.qualificationSet = qualificationSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registries_subactivity_code")
    public String registriesSubactivityCode;
    public Subactivity withRegistriesSubactivityCode(String registriesSubactivityCode) {
        this.registriesSubactivityCode = registriesSubactivityCode;
        return this;
    }
}