package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchCaseClassificationsResponse
 * The response message for SearchCaseClassifications endpoint.
**/
public class SearchCaseClassificationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseClassifications")
    public CaseClassification[] caseClassifications;
    public SearchCaseClassificationsResponse withCaseClassifications(CaseClassification[] caseClassifications) {
        this.caseClassifications = caseClassifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchCaseClassificationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}