package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsageRecordYesterdayListUsageRecordYesterdayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_records")
    public openapisdk.models.shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday[] usageRecords;
    public ListUsageRecordYesterdayListUsageRecordYesterdayResponse withUsageRecords(openapisdk.models.shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday[] usageRecords) {
        this.usageRecords = usageRecords;
        return this;
    }
}