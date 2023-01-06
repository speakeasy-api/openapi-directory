package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimSearchMetricEnum string

const (
	GetSimSearchMetricEnumPhenodigm       GetSimSearchMetricEnum = "phenodigm"
	GetSimSearchMetricEnumJaccard         GetSimSearchMetricEnum = "jaccard"
	GetSimSearchMetricEnumSimGic          GetSimSearchMetricEnum = "simGIC"
	GetSimSearchMetricEnumResnik          GetSimSearchMetricEnum = "resnik"
	GetSimSearchMetricEnumSymmetricResnik GetSimSearchMetricEnum = "symmetric_resnik"
)

type GetSimSearchQueryParams struct {
	ID           []string                `queryParam:"style=form,explode=true,name=id"`
	IsFeatureSet *bool                   `queryParam:"style=form,explode=true,name=is_feature_set"`
	Limit        *int64                  `queryParam:"style=form,explode=true,name=limit"`
	Metric       *GetSimSearchMetricEnum `queryParam:"style=form,explode=true,name=metric"`
	Taxon        *string                 `queryParam:"style=form,explode=true,name=taxon"`
}

type GetSimSearchRequest struct {
	QueryParams GetSimSearchQueryParams
}

type GetSimSearchResponse struct {
	ContentType string
	SimResult   *shared.SimResult
	StatusCode  int64
}
