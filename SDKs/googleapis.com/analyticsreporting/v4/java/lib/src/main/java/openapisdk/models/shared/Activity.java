package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activity
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
**/
public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTime")
    public String activityTime;
    public Activity withActivityTime(String activityTime) {
        this.activityTime = activityTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public ActivityActivityTypeEnum activityType;
    public Activity withActivityType(ActivityActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appview")
    public ScreenviewData appview;
    public Activity withAppview(ScreenviewData appview) {
        this.appview = appview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign")
    public String campaign;
    public Activity withCampaign(String campaign) {
        this.campaign = campaign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelGrouping")
    public String channelGrouping;
    public Activity withChannelGrouping(String channelGrouping) {
        this.channelGrouping = channelGrouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDimension")
    public CustomDimension[] customDimension;
    public Activity withCustomDimension(CustomDimension[] customDimension) {
        this.customDimension = customDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecommerce")
    public EcommerceData ecommerce;
    public Activity withEcommerce(EcommerceData ecommerce) {
        this.ecommerce = ecommerce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public EventData event;
    public Activity withEvent(EventData event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goals")
    public GoalSetData goals;
    public Activity withGoals(GoalSetData goals) {
        this.goals = goals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public Activity withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyword")
    public String keyword;
    public Activity withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landingPagePath")
    public String landingPagePath;
    public Activity withLandingPagePath(String landingPagePath) {
        this.landingPagePath = landingPagePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public String medium;
    public Activity withMedium(String medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageview")
    public PageviewData pageview;
    public Activity withPageview(PageviewData pageview) {
        this.pageview = pageview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Activity withSource(String source) {
        this.source = source;
        return this;
    }
}