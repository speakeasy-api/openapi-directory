package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_access_control_list_mappings")
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[] ipAccessControlListMappings;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withIpAccessControlListMappings(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[] ipAccessControlListMappings) {
        this.ipAccessControlListMappings = ipAccessControlListMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}