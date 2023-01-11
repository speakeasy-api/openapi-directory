package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationPreference
 * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
**/
public class LocationPreference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followGaeApplication")
    public String followGaeApplication;
    public LocationPreference withFollowGaeApplication(String followGaeApplication) {
        this.followGaeApplication = followGaeApplication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LocationPreference withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryZone")
    public String secondaryZone;
    public LocationPreference withSecondaryZone(String secondaryZone) {
        this.secondaryZone = secondaryZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public LocationPreference withZone(String zone) {
        this.zone = zone;
        return this;
    }
}