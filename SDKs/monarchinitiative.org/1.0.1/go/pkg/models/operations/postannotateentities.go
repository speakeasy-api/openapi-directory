package operations

import (
	"openapi/pkg/models/shared"
)

type PostAnnotateEntitiesQueryParams struct {
	Content             *string  `queryParam:"style=form,explode=true,name=content"`
	ExcludeCategory     []string `queryParam:"style=form,explode=true,name=exclude_category"`
	IncludeAbbreviation *bool    `queryParam:"style=form,explode=true,name=include_abbreviation"`
	IncludeAcronym      *bool    `queryParam:"style=form,explode=true,name=include_acronym"`
	IncludeCategory     []string `queryParam:"style=form,explode=true,name=include_category"`
	IncludeNumbers      *bool    `queryParam:"style=form,explode=true,name=include_numbers"`
	LongestOnly         *bool    `queryParam:"style=form,explode=true,name=longest_only"`
	MinLength           *string  `queryParam:"style=form,explode=true,name=min_length"`
}

type PostAnnotateEntitiesRequest struct {
	QueryParams PostAnnotateEntitiesQueryParams
}

type PostAnnotateEntitiesResponse struct {
	ContentType            string
	EntityAnnotationResult *shared.EntityAnnotationResult
	StatusCode             int64
}
