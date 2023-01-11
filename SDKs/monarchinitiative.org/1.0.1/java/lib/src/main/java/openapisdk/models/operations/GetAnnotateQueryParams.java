package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public String content;
    public GetAnnotateQueryParams withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_category")
    public String[] excludeCategory;
    public GetAnnotateQueryParams withExcludeCategory(String[] excludeCategory) {
        this.excludeCategory = excludeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_abbreviation")
    public Boolean includeAbbreviation;
    public GetAnnotateQueryParams withIncludeAbbreviation(Boolean includeAbbreviation) {
        this.includeAbbreviation = includeAbbreviation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_acronym")
    public Boolean includeAcronym;
    public GetAnnotateQueryParams withIncludeAcronym(Boolean includeAcronym) {
        this.includeAcronym = includeAcronym;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_category")
    public String[] includeCategory;
    public GetAnnotateQueryParams withIncludeCategory(String[] includeCategory) {
        this.includeCategory = includeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_numbers")
    public Boolean includeNumbers;
    public GetAnnotateQueryParams withIncludeNumbers(Boolean includeNumbers) {
        this.includeNumbers = includeNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longest_only")
    public Boolean longestOnly;
    public GetAnnotateQueryParams withLongestOnly(Boolean longestOnly) {
        this.longestOnly = longestOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_length")
    public String minLength;
    public GetAnnotateQueryParams withMinLength(String minLength) {
        this.minLength = minLength;
        return this;
    }
}