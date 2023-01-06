package operations

type GetGenericObjectByTypeTypeEnum string

const (
	GetGenericObjectByTypeTypeEnumGene        GetGenericObjectByTypeTypeEnum = "gene"
	GetGenericObjectByTypeTypeEnumVariant     GetGenericObjectByTypeTypeEnum = "variant"
	GetGenericObjectByTypeTypeEnumGenotype    GetGenericObjectByTypeTypeEnum = "genotype"
	GetGenericObjectByTypeTypeEnumPhenotype   GetGenericObjectByTypeTypeEnum = "phenotype"
	GetGenericObjectByTypeTypeEnumDisease     GetGenericObjectByTypeTypeEnum = "disease"
	GetGenericObjectByTypeTypeEnumGoterm      GetGenericObjectByTypeTypeEnum = "goterm"
	GetGenericObjectByTypeTypeEnumPathway     GetGenericObjectByTypeTypeEnum = "pathway"
	GetGenericObjectByTypeTypeEnumAnatomy     GetGenericObjectByTypeTypeEnum = "anatomy"
	GetGenericObjectByTypeTypeEnumSubstance   GetGenericObjectByTypeTypeEnum = "substance"
	GetGenericObjectByTypeTypeEnumIndividual  GetGenericObjectByTypeTypeEnum = "individual"
	GetGenericObjectByTypeTypeEnumPublication GetGenericObjectByTypeTypeEnum = "publication"
	GetGenericObjectByTypeTypeEnumModel       GetGenericObjectByTypeTypeEnum = "model"
	GetGenericObjectByTypeTypeEnumCase        GetGenericObjectByTypeTypeEnum = "case"
)

type GetGenericObjectByTypePathParams struct {
	ID   string                         `pathParam:"style=simple,explode=false,name=id"`
	Type GetGenericObjectByTypeTypeEnum `pathParam:"style=simple,explode=false,name=type"`
}

type GetGenericObjectByTypeQueryParams struct {
	Direct                     *bool    `queryParam:"style=form,explode=true,name=direct"`
	DistinctCounts             *bool    `queryParam:"style=form,explode=true,name=distinct_counts"`
	Evidence                   *string  `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool    `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Facet                      *bool    `queryParam:"style=form,explode=true,name=facet"`
	FacetFields                []string `queryParam:"style=form,explode=true,name=facet_fields"`
	FetchObjects               *bool    `queryParam:"style=form,explode=true,name=fetch_objects"`
	GetAssociationCounts       *bool    `queryParam:"style=form,explode=true,name=get_association_counts"`
	Rows                       *int64   `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64   `queryParam:"style=form,explode=true,name=start"`
	UnselectEvidence           *bool    `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool    `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetGenericObjectByTypeRequest struct {
	PathParams  GetGenericObjectByTypePathParams
	QueryParams GetGenericObjectByTypeQueryParams
}

type GetGenericObjectByTypeResponse struct {
	ContentType string
	StatusCode  int64
}
