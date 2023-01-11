package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRestorePlansResponse
 * Response message for ListRestorePlans.
**/
public class ListRestorePlansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRestorePlansResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restorePlans")
    public RestorePlan[] restorePlans;
    public ListRestorePlansResponse withRestorePlans(RestorePlan[] restorePlans) {
        this.restorePlans = restorePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListRestorePlansResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}