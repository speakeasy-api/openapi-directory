package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_url")
    public String firstPageUrl;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withFirstPageUrl(String firstPageUrl) {
        this.firstPageUrl = firstPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_url")
    public String nextPageUrl;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withNextPageUrl(String nextPageUrl) {
        this.nextPageUrl = nextPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_url")
    public String previousPageUrl;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withPreviousPageUrl(String previousPageUrl) {
        this.previousPageUrl = previousPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta withUrl(String url) {
        this.url = url;
        return this;
    }
}