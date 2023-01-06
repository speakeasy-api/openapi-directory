package operations

import (
	"openapi/pkg/models/shared"
)

type GetEdgeResourcePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEdgeResourceDirectionEnum string

const (
	GetEdgeResourceDirectionEnumIncoming GetEdgeResourceDirectionEnum = "INCOMING"
	GetEdgeResourceDirectionEnumOutgoing GetEdgeResourceDirectionEnum = "OUTGOING"
	GetEdgeResourceDirectionEnumBoth     GetEdgeResourceDirectionEnum = "BOTH"
)

type GetEdgeResourceGraphEnum string

const (
	GetEdgeResourceGraphEnumData     GetEdgeResourceGraphEnum = "data"
	GetEdgeResourceGraphEnumOntology GetEdgeResourceGraphEnum = "ontology"
)

type GetEdgeResourceQueryParams struct {
	Depth            *int64                        `queryParam:"style=form,explode=true,name=depth"`
	Direction        *GetEdgeResourceDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Entail           *bool                         `queryParam:"style=form,explode=true,name=entail"`
	Graph            *GetEdgeResourceGraphEnum     `queryParam:"style=form,explode=true,name=graph"`
	RelationshipType []string                      `queryParam:"style=form,explode=true,name=relationship_type"`
}

type GetEdgeResourceRequest struct {
	PathParams  GetEdgeResourcePathParams
	QueryParams GetEdgeResourceQueryParams
}

type GetEdgeResourceResponse struct {
	ContentType string
	Graphs      []shared.Graph
	StatusCode  int64
}
