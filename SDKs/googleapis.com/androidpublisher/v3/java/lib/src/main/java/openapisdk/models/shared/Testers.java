package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Testers
 * The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
**/
public class Testers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleGroups")
    public String[] googleGroups;
    public Testers withGoogleGroups(String[] googleGroups) {
        this.googleGroups = googleGroups;
        return this;
    }
}