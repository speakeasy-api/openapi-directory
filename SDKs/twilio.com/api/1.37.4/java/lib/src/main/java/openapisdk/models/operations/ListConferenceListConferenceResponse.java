package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConferenceListConferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferences")
    public openapisdk.models.shared.ApiV2010AccountConference[] conferences;
    public ListConferenceListConferenceResponse withConferences(openapisdk.models.shared.ApiV2010AccountConference[] conferences) {
        this.conferences = conferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListConferenceListConferenceResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListConferenceListConferenceResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListConferenceListConferenceResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListConferenceListConferenceResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListConferenceListConferenceResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListConferenceListConferenceResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListConferenceListConferenceResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListConferenceListConferenceResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}