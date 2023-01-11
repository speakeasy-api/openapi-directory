package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UserBadge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("awardedAt")
    public OffsetDateTime awardedAt;
    public UserBadge withAwardedAt(OffsetDateTime awardedAt) {
        this.awardedAt = awardedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeExpiry")
    public UserBadgeBadgeExpiry badgeExpiry;
    public UserBadge withBadgeExpiry(UserBadgeBadgeExpiry badgeExpiry) {
        this.badgeExpiry = badgeExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeUrl")
    public String badgeUrl;
    public UserBadge withBadgeUrl(String badgeUrl) {
        this.badgeUrl = badgeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criterias")
    public Criteria criterias;
    public UserBadge withCriterias(Criteria criterias) {
        this.criterias = criterias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UserBadge withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringId")
    public String offeringId;
    public UserBadge withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openBadge")
    public OpenBadgeClass openBadge;
    public UserBadge withOpenBadge(OpenBadgeClass openBadge) {
        this.openBadge = openBadge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UserBadge withTitle(String title) {
        this.title = title;
        return this;
    }
}