package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBigQueryExportsResponse
 * Response message for listing BigQuery exports.
**/
public class ListBigQueryExportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQueryExports")
    public GoogleCloudSecuritycenterV1BigQueryExport[] bigQueryExports;
    public ListBigQueryExportsResponse withBigQueryExports(GoogleCloudSecuritycenterV1BigQueryExport[] bigQueryExports) {
        this.bigQueryExports = bigQueryExports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBigQueryExportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}