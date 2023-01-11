package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotateEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public String content;
    public GetAnnotateEntitiesQueryParams withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_category")
    public String[] excludeCategory;
    public GetAnnotateEntitiesQueryParams withExcludeCategory(String[] excludeCategory) {
        this.excludeCategory = excludeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_abbreviation")
    public Boolean includeAbbreviation;
    public GetAnnotateEntitiesQueryParams withIncludeAbbreviation(Boolean includeAbbreviation) {
        this.includeAbbreviation = includeAbbreviation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_acronym")
    public Boolean includeAcronym;
    public GetAnnotateEntitiesQueryParams withIncludeAcronym(Boolean includeAcronym) {
        this.includeAcronym = includeAcronym;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_category")
    public String[] includeCategory;
    public GetAnnotateEntitiesQueryParams withIncludeCategory(String[] includeCategory) {
        this.includeCategory = includeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_numbers")
    public Boolean includeNumbers;
    public GetAnnotateEntitiesQueryParams withIncludeNumbers(Boolean includeNumbers) {
        this.includeNumbers = includeNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longest_only")
    public Boolean longestOnly;
    public GetAnnotateEntitiesQueryParams withLongestOnly(Boolean longestOnly) {
        this.longestOnly = longestOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_length")
    public String minLength;
    public GetAnnotateEntitiesQueryParams withMinLength(String minLength) {
        this.minLength = minLength;
        return this;
    }
}