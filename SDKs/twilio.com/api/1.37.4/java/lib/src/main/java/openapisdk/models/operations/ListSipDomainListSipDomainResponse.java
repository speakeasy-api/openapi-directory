package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipDomainListSipDomainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public openapisdk.models.shared.ApiV2010AccountSipSipDomain[] domains;
    public ListSipDomainListSipDomainResponse withDomains(openapisdk.models.shared.ApiV2010AccountSipSipDomain[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListSipDomainListSipDomainResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListSipDomainListSipDomainResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListSipDomainListSipDomainResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListSipDomainListSipDomainResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListSipDomainListSipDomainResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListSipDomainListSipDomainResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListSipDomainListSipDomainResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListSipDomainListSipDomainResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}