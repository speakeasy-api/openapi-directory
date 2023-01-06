package operations

type GetAnnotateQueryParams struct {
	Content             *string  `queryParam:"style=form,explode=true,name=content"`
	ExcludeCategory     []string `queryParam:"style=form,explode=true,name=exclude_category"`
	IncludeAbbreviation *bool    `queryParam:"style=form,explode=true,name=include_abbreviation"`
	IncludeAcronym      *bool    `queryParam:"style=form,explode=true,name=include_acronym"`
	IncludeCategory     []string `queryParam:"style=form,explode=true,name=include_category"`
	IncludeNumbers      *bool    `queryParam:"style=form,explode=true,name=include_numbers"`
	LongestOnly         *bool    `queryParam:"style=form,explode=true,name=longest_only"`
	MinLength           *string  `queryParam:"style=form,explode=true,name=min_length"`
}

type GetAnnotateRequest struct {
	QueryParams GetAnnotateQueryParams
}

type GetAnnotateResponse struct {
	ContentType string
	StatusCode  int64
}
