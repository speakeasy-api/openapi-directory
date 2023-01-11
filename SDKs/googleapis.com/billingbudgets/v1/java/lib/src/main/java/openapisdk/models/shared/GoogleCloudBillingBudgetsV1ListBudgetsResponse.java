package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1ListBudgetsResponse
 * Response for ListBudgets
**/
public class GoogleCloudBillingBudgetsV1ListBudgetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgets")
    public GoogleCloudBillingBudgetsV1Budget[] budgets;
    public GoogleCloudBillingBudgetsV1ListBudgetsResponse withBudgets(GoogleCloudBillingBudgetsV1Budget[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudBillingBudgetsV1ListBudgetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}