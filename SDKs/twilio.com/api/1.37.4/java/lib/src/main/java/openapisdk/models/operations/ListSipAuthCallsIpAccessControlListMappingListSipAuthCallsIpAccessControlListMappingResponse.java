package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping[] contents;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withContents(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}