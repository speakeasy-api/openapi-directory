package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaChangeHistoryEvent
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
**/
public class GoogleAnalyticsAdminV1betaChangeHistoryEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actorType")
    public GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum actorType;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withActorType(GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum actorType) {
        this.actorType = actorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeTime")
    public String changeTime;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withChangeTime(String changeTime) {
        this.changeTime = changeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changes")
    public GoogleAnalyticsAdminV1betaChangeHistoryChange[] changes;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withChanges(GoogleAnalyticsAdminV1betaChangeHistoryChange[] changes) {
        this.changes = changes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changesFiltered")
    public Boolean changesFiltered;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withChangesFiltered(Boolean changesFiltered) {
        this.changesFiltered = changesFiltered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userActorEmail")
    public String userActorEmail;
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent withUserActorEmail(String userActorEmail) {
        this.userActorEmail = userActorEmail;
        return this;
    }
}