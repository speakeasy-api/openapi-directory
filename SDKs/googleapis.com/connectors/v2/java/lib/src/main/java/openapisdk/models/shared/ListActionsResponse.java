package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListActionsResponse
 * Response message for ActionService.ListActions
**/
public class ListActionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public ListActionsResponse withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListActionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsupportedActionNames")
    public String[] unsupportedActionNames;
    public ListActionsResponse withUnsupportedActionNames(String[] unsupportedActionNames) {
        this.unsupportedActionNames = unsupportedActionNames;
        return this;
    }
}