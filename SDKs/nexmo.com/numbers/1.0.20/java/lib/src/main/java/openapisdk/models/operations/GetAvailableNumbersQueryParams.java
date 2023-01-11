package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableNumbersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetAvailableNumbersQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=features")
    public openapisdk.models.shared.SearchPatternEnum features;
    public GetAvailableNumbersQueryParams withFeatures(openapisdk.models.shared.SearchPatternEnum features) {
        this.features = features;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=index")
    public Long index;
    public GetAvailableNumbersQueryParams withIndex(Long index) {
        this.index = index;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pattern")
    public String pattern;
    public GetAvailableNumbersQueryParams withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_pattern")
    public Long searchPattern;
    public GetAvailableNumbersQueryParams withSearchPattern(Long searchPattern) {
        this.searchPattern = searchPattern;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetAvailableNumbersQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.TypeEnum type;
    public GetAvailableNumbersQueryParams withType(openapisdk.models.shared.TypeEnum type) {
        this.type = type;
        return this;
    }
}