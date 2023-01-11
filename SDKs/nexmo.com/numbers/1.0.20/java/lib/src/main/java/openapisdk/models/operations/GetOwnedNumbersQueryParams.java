package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOwnedNumbersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application_id")
    public String applicationId;
    public GetOwnedNumbersQueryParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetOwnedNumbersQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_application")
    public Boolean hasApplication;
    public GetOwnedNumbersQueryParams withHasApplication(Boolean hasApplication) {
        this.hasApplication = hasApplication;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=index")
    public Long index;
    public GetOwnedNumbersQueryParams withIndex(Long index) {
        this.index = index;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pattern")
    public String pattern;
    public GetOwnedNumbersQueryParams withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_pattern")
    public Long searchPattern;
    public GetOwnedNumbersQueryParams withSearchPattern(Long searchPattern) {
        this.searchPattern = searchPattern;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetOwnedNumbersQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}