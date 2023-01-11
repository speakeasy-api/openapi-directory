package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Embedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public Application[] applications;
    public Embedded withApplications(Application[] applications) {
        this.applications = applications;
        return this;
    }
}