package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotateEntitiesQueryParams struct {
	Content             *string  `queryParam:"style=form,explode=true,name=content"`
	ExcludeCategory     []string `queryParam:"style=form,explode=true,name=exclude_category"`
	IncludeAbbreviation *bool    `queryParam:"style=form,explode=true,name=include_abbreviation"`
	IncludeAcronym      *bool    `queryParam:"style=form,explode=true,name=include_acronym"`
	IncludeCategory     []string `queryParam:"style=form,explode=true,name=include_category"`
	IncludeNumbers      *bool    `queryParam:"style=form,explode=true,name=include_numbers"`
	LongestOnly         *bool    `queryParam:"style=form,explode=true,name=longest_only"`
	MinLength           *string  `queryParam:"style=form,explode=true,name=min_length"`
}

type GetAnnotateEntitiesRequest struct {
	QueryParams GetAnnotateEntitiesQueryParams
}

type GetAnnotateEntitiesResponse struct {
	ContentType            string
	EntityAnnotationResult *shared.EntityAnnotationResult
	StatusCode             int64
}
