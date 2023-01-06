package operations

type GetEntitySetFunctionSlimmerRelationshipTypeEnum string

const (
	GetEntitySetFunctionSlimmerRelationshipTypeEnumInvolvedIn             GetEntitySetFunctionSlimmerRelationshipTypeEnum = "involved_in"
	GetEntitySetFunctionSlimmerRelationshipTypeEnumActsUpstreamOfOrWithin GetEntitySetFunctionSlimmerRelationshipTypeEnum = "acts_upstream_of_or_within"
)

type GetEntitySetFunctionSlimmerQueryParams struct {
	ExcludeAutomaticAssertions *bool                                            `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	RelationshipType           *GetEntitySetFunctionSlimmerRelationshipTypeEnum `queryParam:"style=form,explode=true,name=relationship_type"`
	Rows                       *int64                                           `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string                                         `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64                                           `queryParam:"style=form,explode=true,name=start"`
	Subject                    []string                                         `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetFunctionSlimmerRequest struct {
	QueryParams GetEntitySetFunctionSlimmerQueryParams
}

type GetEntitySetFunctionSlimmerResponse struct {
	ContentType string
	StatusCode  int64
}
