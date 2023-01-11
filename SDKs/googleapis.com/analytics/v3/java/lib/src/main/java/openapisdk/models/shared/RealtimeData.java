package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RealtimeData
 * Real time data for a given view (profile).
**/
public class RealtimeData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeaders")
    public RealtimeDataColumnHeaders[] columnHeaders;
    public RealtimeData withColumnHeaders(RealtimeDataColumnHeaders[] columnHeaders) {
        this.columnHeaders = columnHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RealtimeData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RealtimeData withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileInfo")
    public RealtimeDataProfileInfo profileInfo;
    public RealtimeData withProfileInfo(RealtimeDataProfileInfo profileInfo) {
        this.profileInfo = profileInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public RealtimeDataQuery query;
    public RealtimeData withQuery(RealtimeDataQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public String[][] rows;
    public RealtimeData withRows(String[][] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public RealtimeData withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public RealtimeData withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalsForAllResults")
    public java.util.Map<String, String> totalsForAllResults;
    public RealtimeData withTotalsForAllResults(java.util.Map<String, String> totalsForAllResults) {
        this.totalsForAllResults = totalsForAllResults;
        return this;
    }
}