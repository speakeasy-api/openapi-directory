package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSavedReportsResponse
 * Response definition for the saved reports list rpc.
**/
public class ListSavedReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSavedReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savedReports")
    public SavedReport[] savedReports;
    public ListSavedReportsResponse withSavedReports(SavedReport[] savedReports) {
        this.savedReports = savedReports;
        return this;
    }
}