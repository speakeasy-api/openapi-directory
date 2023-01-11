package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchUserActivityRequest
 * The request to fetch User Report from Reporting API `userActivity:get` call.
**/
public class SearchUserActivityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityTypes")
    public SearchUserActivityRequestActivityTypesEnum[] activityTypes;
    public SearchUserActivityRequest withActivityTypes(SearchUserActivityRequestActivityTypesEnum[] activityTypes) {
        this.activityTypes = activityTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public SearchUserActivityRequest withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public SearchUserActivityRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public SearchUserActivityRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public SearchUserActivityRequest withUser(User user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewId")
    public String viewId;
    public SearchUserActivityRequest withViewId(String viewId) {
        this.viewId = viewId;
        return this;
    }
}