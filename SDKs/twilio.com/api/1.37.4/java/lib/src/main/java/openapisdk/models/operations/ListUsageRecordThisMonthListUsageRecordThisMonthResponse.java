package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsageRecordThisMonthListUsageRecordThisMonthResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_records")
    public openapisdk.models.shared.ApiV2010AccountUsageUsageRecordUsageRecordThisMonth[] usageRecords;
    public ListUsageRecordThisMonthListUsageRecordThisMonthResponse withUsageRecords(openapisdk.models.shared.ApiV2010AccountUsageUsageRecordUsageRecordThisMonth[] usageRecords) {
        this.usageRecords = usageRecords;
        return this;
    }
}