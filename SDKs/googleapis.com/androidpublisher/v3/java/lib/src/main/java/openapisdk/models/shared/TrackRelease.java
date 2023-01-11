package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackRelease
 * A release within a track.
**/
public class TrackRelease {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryTargeting")
    public CountryTargeting countryTargeting;
    public TrackRelease withCountryTargeting(CountryTargeting countryTargeting) {
        this.countryTargeting = countryTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inAppUpdatePriority")
    public Integer inAppUpdatePriority;
    public TrackRelease withInAppUpdatePriority(Integer inAppUpdatePriority) {
        this.inAppUpdatePriority = inAppUpdatePriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TrackRelease withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseNotes")
    public LocalizedText[] releaseNotes;
    public TrackRelease withReleaseNotes(LocalizedText[] releaseNotes) {
        this.releaseNotes = releaseNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TrackReleaseStatusEnum status;
    public TrackRelease withStatus(TrackReleaseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userFraction")
    public Double userFraction;
    public TrackRelease withUserFraction(Double userFraction) {
        this.userFraction = userFraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCodes")
    public String[] versionCodes;
    public TrackRelease withVersionCodes(String[] versionCodes) {
        this.versionCodes = versionCodes;
        return this;
    }
}