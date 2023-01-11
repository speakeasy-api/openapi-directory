package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2ClassificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetDiscoveryV2ClassificationsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2ClassificationsIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2ClassificationsQueryParams withIncludeLicensedContent(GetDiscoveryV2ClassificationsIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSpellcheck")
    public GetDiscoveryV2ClassificationsIncludeSpellcheckEnum includeSpellcheck;
    public GetDiscoveryV2ClassificationsQueryParams withIncludeSpellcheck(GetDiscoveryV2ClassificationsIncludeSpellcheckEnum includeSpellcheck) {
        this.includeSpellcheck = includeSpellcheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTest")
    public GetDiscoveryV2ClassificationsIncludeTestEnum includeTest;
    public GetDiscoveryV2ClassificationsQueryParams withIncludeTest(GetDiscoveryV2ClassificationsIncludeTestEnum includeTest) {
        this.includeTest = includeTest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public GetDiscoveryV2ClassificationsQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2ClassificationsQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDiscoveryV2ClassificationsQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public GetDiscoveryV2ClassificationsQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDiscoveryV2ClassificationsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetDiscoveryV2ClassificationsSourceEnum source;
    public GetDiscoveryV2ClassificationsQueryParams withSource(GetDiscoveryV2ClassificationsSourceEnum source) {
        this.source = source;
        return this;
    }
}