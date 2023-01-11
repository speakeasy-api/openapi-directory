package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecordingAddOnResultListRecordingAddOnResultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_results")
    public openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult[] addOnResults;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withAddOnResults(openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult[] addOnResults) {
        this.addOnResults = addOnResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListRecordingAddOnResultListRecordingAddOnResultResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}