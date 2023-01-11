package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAuthorizedConnectAppListAuthorizedConnectAppResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized_connect_apps")
    public openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp[] authorizedConnectApps;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withAuthorizedConnectApps(openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp[] authorizedConnectApps) {
        this.authorizedConnectApps = authorizedConnectApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListAuthorizedConnectAppListAuthorizedConnectAppResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}