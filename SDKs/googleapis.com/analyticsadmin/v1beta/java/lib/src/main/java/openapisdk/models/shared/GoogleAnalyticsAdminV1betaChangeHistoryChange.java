package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaChangeHistoryChange
 * A description of a change to a single Google Analytics resource.
**/
public class GoogleAnalyticsAdminV1betaChangeHistoryChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum action;
    public GoogleAnalyticsAdminV1betaChangeHistoryChange withAction(GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public GoogleAnalyticsAdminV1betaChangeHistoryChange withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceAfterChange")
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource resourceAfterChange;
    public GoogleAnalyticsAdminV1betaChangeHistoryChange withResourceAfterChange(GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource resourceAfterChange) {
        this.resourceAfterChange = resourceAfterChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceBeforeChange")
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource resourceBeforeChange;
    public GoogleAnalyticsAdminV1betaChangeHistoryChange withResourceBeforeChange(GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource resourceBeforeChange) {
        this.resourceBeforeChange = resourceBeforeChange;
        return this;
    }
}