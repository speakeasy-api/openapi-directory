package operations

type GetOntologyTermGraphPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetOntologyTermGraphGraphTypeEnum string

const (
	GetOntologyTermGraphGraphTypeEnumTopologyGraph              GetOntologyTermGraphGraphTypeEnum = "topology_graph"
	GetOntologyTermGraphGraphTypeEnumRegulatesTransitivityGraph GetOntologyTermGraphGraphTypeEnum = "regulates_transitivity_graph"
	GetOntologyTermGraphGraphTypeEnumNeighborhoodGraph          GetOntologyTermGraphGraphTypeEnum = "neighborhood_graph"
	GetOntologyTermGraphGraphTypeEnumNeighborhoodLimitedGraph   GetOntologyTermGraphGraphTypeEnum = "neighborhood_limited_graph"
)

type GetOntologyTermGraphQueryParams struct {
	GraphType *GetOntologyTermGraphGraphTypeEnum `queryParam:"style=form,explode=true,name=graph_type"`
}

type GetOntologyTermGraphRequest struct {
	PathParams  GetOntologyTermGraphPathParams
	QueryParams GetOntologyTermGraphQueryParams
}

type GetOntologyTermGraphResponse struct {
	ContentType string
	StatusCode  int64
}
