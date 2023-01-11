package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAnnotateEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public String content;
    public PostAnnotateEntitiesQueryParams withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_category")
    public String[] excludeCategory;
    public PostAnnotateEntitiesQueryParams withExcludeCategory(String[] excludeCategory) {
        this.excludeCategory = excludeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_abbreviation")
    public Boolean includeAbbreviation;
    public PostAnnotateEntitiesQueryParams withIncludeAbbreviation(Boolean includeAbbreviation) {
        this.includeAbbreviation = includeAbbreviation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_acronym")
    public Boolean includeAcronym;
    public PostAnnotateEntitiesQueryParams withIncludeAcronym(Boolean includeAcronym) {
        this.includeAcronym = includeAcronym;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_category")
    public String[] includeCategory;
    public PostAnnotateEntitiesQueryParams withIncludeCategory(String[] includeCategory) {
        this.includeCategory = includeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_numbers")
    public Boolean includeNumbers;
    public PostAnnotateEntitiesQueryParams withIncludeNumbers(Boolean includeNumbers) {
        this.includeNumbers = includeNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longest_only")
    public Boolean longestOnly;
    public PostAnnotateEntitiesQueryParams withLongestOnly(Boolean longestOnly) {
        this.longestOnly = longestOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_length")
    public String minLength;
    public PostAnnotateEntitiesQueryParams withMinLength(String minLength) {
        this.minLength = minLength;
        return this;
    }
}