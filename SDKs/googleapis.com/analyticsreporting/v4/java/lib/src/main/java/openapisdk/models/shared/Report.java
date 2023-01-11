package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Report
 * The data response corresponding to the request.
**/
public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeader")
    public ColumnHeader columnHeader;
    public Report withColumnHeader(ColumnHeader columnHeader) {
        this.columnHeader = columnHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ReportData data;
    public Report withData(ReportData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public Report withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}