package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GaData
 * Analytics data for a given view (profile).
**/
public class GaData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeaders")
    public GaDataColumnHeaders[] columnHeaders;
    public GaData withColumnHeaders(GaDataColumnHeaders[] columnHeaders) {
        this.columnHeaders = columnHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containsSampledData")
    public Boolean containsSampledData;
    public GaData withContainsSampledData(Boolean containsSampledData) {
        this.containsSampledData = containsSampledData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLastRefreshed")
    public String dataLastRefreshed;
    public GaData withDataLastRefreshed(String dataLastRefreshed) {
        this.dataLastRefreshed = dataLastRefreshed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataTable")
    public GaDataDataTable dataTable;
    public GaData withDataTable(GaDataDataTable dataTable) {
        this.dataTable = dataTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GaData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public GaData withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GaData withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public GaData withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public GaData withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileInfo")
    public GaDataProfileInfo profileInfo;
    public GaData withProfileInfo(GaDataProfileInfo profileInfo) {
        this.profileInfo = profileInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public GaDataQuery query;
    public GaData withQuery(GaDataQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public String[][] rows;
    public GaData withRows(String[][] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSize")
    public String sampleSize;
    public GaData withSampleSize(String sampleSize) {
        this.sampleSize = sampleSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSpace")
    public String sampleSpace;
    public GaData withSampleSpace(String sampleSpace) {
        this.sampleSpace = sampleSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public GaData withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public GaData withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalsForAllResults")
    public java.util.Map<String, String> totalsForAllResults;
    public GaData withTotalsForAllResults(java.util.Map<String, String> totalsForAllResults) {
        this.totalsForAllResults = totalsForAllResults;
        return this;
    }
}