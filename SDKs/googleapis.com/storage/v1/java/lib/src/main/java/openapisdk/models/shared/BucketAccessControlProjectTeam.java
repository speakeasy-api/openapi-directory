package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketAccessControlProjectTeam
 * The project team associated with the entity, if any.
**/
public class BucketAccessControlProjectTeam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectNumber")
    public String projectNumber;
    public BucketAccessControlProjectTeam withProjectNumber(String projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public BucketAccessControlProjectTeam withTeam(String team) {
        this.team = team;
        return this;
    }
}