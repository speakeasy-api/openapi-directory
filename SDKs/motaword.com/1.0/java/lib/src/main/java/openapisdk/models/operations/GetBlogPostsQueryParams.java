package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlogPostsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fallback")
    public Boolean fallback;
    public GetBlogPostsQueryParams withFallback(Boolean fallback) {
        this.fallback = fallback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetBlogPostsQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetBlogPostsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetBlogPostsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}