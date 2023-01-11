package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Testers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleGroups")
    public String[] googleGroups;
    public Testers withGoogleGroups(String[] googleGroups) {
        this.googleGroups = googleGroups;
        return this;
    }
}