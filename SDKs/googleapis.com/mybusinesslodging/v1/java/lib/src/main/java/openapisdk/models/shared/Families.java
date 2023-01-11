package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Families
 * Services and amenities for families and young guests.
**/
public class Families {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("babysitting")
    public Boolean babysitting;
    public Families withBabysitting(Boolean babysitting) {
        this.babysitting = babysitting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("babysittingException")
    public FamiliesBabysittingExceptionEnum babysittingException;
    public Families withBabysittingException(FamiliesBabysittingExceptionEnum babysittingException) {
        this.babysittingException = babysittingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsActivities")
    public Boolean kidsActivities;
    public Families withKidsActivities(Boolean kidsActivities) {
        this.kidsActivities = kidsActivities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsActivitiesException")
    public FamiliesKidsActivitiesExceptionEnum kidsActivitiesException;
    public Families withKidsActivitiesException(FamiliesKidsActivitiesExceptionEnum kidsActivitiesException) {
        this.kidsActivitiesException = kidsActivitiesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsClub")
    public Boolean kidsClub;
    public Families withKidsClub(Boolean kidsClub) {
        this.kidsClub = kidsClub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsClubException")
    public FamiliesKidsClubExceptionEnum kidsClubException;
    public Families withKidsClubException(FamiliesKidsClubExceptionEnum kidsClubException) {
        this.kidsClubException = kidsClubException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsFriendly")
    public Boolean kidsFriendly;
    public Families withKidsFriendly(Boolean kidsFriendly) {
        this.kidsFriendly = kidsFriendly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsFriendlyException")
    public FamiliesKidsFriendlyExceptionEnum kidsFriendlyException;
    public Families withKidsFriendlyException(FamiliesKidsFriendlyExceptionEnum kidsFriendlyException) {
        this.kidsFriendlyException = kidsFriendlyException;
        return this;
    }
}