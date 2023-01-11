package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest
 * Request message for SearchChangeHistoryEvents RPC.
**/
public class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum[] action;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withAction(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum[] action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actorEmail")
    public String[] actorEmail;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withActorEmail(String[] actorEmail) {
        this.actorEmail = actorEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliestChangeTime")
    public String earliestChangeTime;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withEarliestChangeTime(String earliestChangeTime) {
        this.earliestChangeTime = earliestChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestChangeTime")
    public String latestChangeTime;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withLatestChangeTime(String latestChangeTime) {
        this.latestChangeTime = latestChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum[] resourceType;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest withResourceType(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum[] resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}