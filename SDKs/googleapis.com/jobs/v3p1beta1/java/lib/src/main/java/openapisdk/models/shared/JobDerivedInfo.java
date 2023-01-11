package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobDerivedInfo
 * Output only. Derived details about the job posting.
**/
public class JobDerivedInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobCategories")
    public JobDerivedInfoJobCategoriesEnum[] jobCategories;
    public JobDerivedInfo withJobCategories(JobDerivedInfoJobCategoriesEnum[] jobCategories) {
        this.jobCategories = jobCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public JobDerivedInfo withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
}