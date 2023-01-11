package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Ad
 * Contains properties of a Campaign Manager ad.
**/
public class Ad {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Ad withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Ad withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Ad withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public Ad withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public Ad withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceSegmentId")
    public String audienceSegmentId;
    public Ad withAudienceSegmentId(String audienceSegmentId) {
        this.audienceSegmentId = audienceSegmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public Ad withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;
    public Ad withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public ClickThroughUrl clickThroughUrl;
    public Ad withClickThroughUrl(ClickThroughUrl clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrlSuffixProperties")
    public ClickThroughUrlSuffixProperties clickThroughUrlSuffixProperties;
    public Ad withClickThroughUrlSuffixProperties(ClickThroughUrlSuffixProperties clickThroughUrlSuffixProperties) {
        this.clickThroughUrlSuffixProperties = clickThroughUrlSuffixProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public Ad withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility")
    public AdCompatibilityEnum compatibility;
    public Ad withCompatibility(AdCompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;
    public Ad withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroupAssignments")
    public CreativeGroupAssignment[] creativeGroupAssignments;
    public Ad withCreativeGroupAssignments(CreativeGroupAssignment[] creativeGroupAssignments) {
        this.creativeGroupAssignments = creativeGroupAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRotation")
    public CreativeRotation creativeRotation;
    public Ad withCreativeRotation(CreativeRotation creativeRotation) {
        this.creativeRotation = creativeRotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayPartTargeting")
    public DayPartTargeting dayPartTargeting;
    public Ad withDayPartTargeting(DayPartTargeting dayPartTargeting) {
        this.dayPartTargeting = dayPartTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultClickThroughEventTagProperties")
    public DefaultClickThroughEventTagProperties defaultClickThroughEventTagProperties;
    public Ad withDefaultClickThroughEventTagProperties(DefaultClickThroughEventTagProperties defaultClickThroughEventTagProperties) {
        this.defaultClickThroughEventTagProperties = defaultClickThroughEventTagProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliverySchedule")
    public DeliverySchedule deliverySchedule;
    public Ad withDeliverySchedule(DeliverySchedule deliverySchedule) {
        this.deliverySchedule = deliverySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicClickTracker")
    public Boolean dynamicClickTracker;
    public Ad withDynamicClickTracker(Boolean dynamicClickTracker) {
        this.dynamicClickTracker = dynamicClickTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public Ad withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTagOverrides")
    public EventTagOverride[] eventTagOverrides;
    public Ad withEventTagOverrides(EventTagOverride[] eventTagOverrides) {
        this.eventTagOverrides = eventTagOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public GeoTargeting geoTargeting;
    public Ad withGeoTargeting(GeoTargeting geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Ad withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Ad withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValueTargetingExpression")
    public KeyValueTargetingExpression keyValueTargetingExpression;
    public Ad withKeyValueTargetingExpression(KeyValueTargetingExpression keyValueTargetingExpression) {
        this.keyValueTargetingExpression = keyValueTargetingExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Ad withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageTargeting")
    public LanguageTargeting languageTargeting;
    public Ad withLanguageTargeting(LanguageTargeting languageTargeting) {
        this.languageTargeting = languageTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Ad withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Ad withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementAssignments")
    public PlacementAssignment[] placementAssignments;
    public Ad withPlacementAssignments(PlacementAssignment[] placementAssignments) {
        this.placementAssignments = placementAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remarketingListExpression")
    public ListTargetingExpression remarketingListExpression;
    public Ad withRemarketingListExpression(ListTargetingExpression remarketingListExpression) {
        this.remarketingListExpression = remarketingListExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public Ad withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public Ad withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;
    public Ad withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public Ad withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Ad withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingTemplateId")
    public String targetingTemplateId;
    public Ad withTargetingTemplateId(String targetingTemplateId) {
        this.targetingTemplateId = targetingTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technologyTargeting")
    public TechnologyTargeting technologyTargeting;
    public Ad withTechnologyTargeting(TechnologyTargeting technologyTargeting) {
        this.technologyTargeting = technologyTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AdTypeEnum type;
    public Ad withType(AdTypeEnum type) {
        this.type = type;
        return this;
    }
}