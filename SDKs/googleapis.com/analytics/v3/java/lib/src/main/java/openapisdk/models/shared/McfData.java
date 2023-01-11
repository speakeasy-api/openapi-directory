package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * McfData
 * Multi-Channel Funnels data for a given view (profile).
**/
public class McfData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeaders")
    public McfDataColumnHeaders[] columnHeaders;
    public McfData withColumnHeaders(McfDataColumnHeaders[] columnHeaders) {
        this.columnHeaders = columnHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containsSampledData")
    public Boolean containsSampledData;
    public McfData withContainsSampledData(Boolean containsSampledData) {
        this.containsSampledData = containsSampledData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public McfData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public McfData withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public McfData withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public McfData withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public McfData withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileInfo")
    public McfDataProfileInfo profileInfo;
    public McfData withProfileInfo(McfDataProfileInfo profileInfo) {
        this.profileInfo = profileInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public McfDataQuery query;
    public McfData withQuery(McfDataQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public McfDataRows[][] rows;
    public McfData withRows(McfDataRows[][] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSize")
    public String sampleSize;
    public McfData withSampleSize(String sampleSize) {
        this.sampleSize = sampleSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSpace")
    public String sampleSpace;
    public McfData withSampleSpace(String sampleSpace) {
        this.sampleSpace = sampleSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public McfData withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public McfData withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalsForAllResults")
    public java.util.Map<String, String> totalsForAllResults;
    public McfData withTotalsForAllResults(java.util.Map<String, String> totalsForAllResults) {
        this.totalsForAllResults = totalsForAllResults;
        return this;
    }
}