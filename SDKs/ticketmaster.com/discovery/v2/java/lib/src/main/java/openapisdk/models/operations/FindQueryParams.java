package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationId")
    public Object[] classificationId;
    public FindQueryParams withClassificationId(Object[] classificationId) {
        this.classificationId = classificationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationName")
    public Object[] classificationName;
    public FindQueryParams withClassificationName(Object[] classificationName) {
        this.classificationName = classificationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public FindQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public FindIncludeLicensedContentEnum includeLicensedContent;
    public FindQueryParams withIncludeLicensedContent(FindIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeSpellcheck")
    public FindIncludeSpellcheckEnum includeSpellcheck;
    public FindQueryParams withIncludeSpellcheck(FindIncludeSpellcheckEnum includeSpellcheck) {
        this.includeSpellcheck = includeSpellcheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTest")
    public FindIncludeTestEnum includeTest;
    public FindQueryParams withIncludeTest(FindIncludeTestEnum includeTest) {
        this.includeTest = includeTest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword")
    public String keyword;
    public FindQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public FindQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public FindQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public FindQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public FindQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public FindSourceEnum source;
    public FindQueryParams withSource(FindSourceEnum source) {
        this.source = source;
        return this;
    }
}