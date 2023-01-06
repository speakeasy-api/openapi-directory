package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimCompareMetricEnum string

const (
	GetSimCompareMetricEnumPhenodigm       GetSimCompareMetricEnum = "phenodigm"
	GetSimCompareMetricEnumJaccard         GetSimCompareMetricEnum = "jaccard"
	GetSimCompareMetricEnumSimGic          GetSimCompareMetricEnum = "simGIC"
	GetSimCompareMetricEnumResnik          GetSimCompareMetricEnum = "resnik"
	GetSimCompareMetricEnumSymmetricResnik GetSimCompareMetricEnum = "symmetric_resnik"
)

type GetSimCompareQueryParams struct {
	IsFeatureSet *bool                    `queryParam:"style=form,explode=true,name=is_feature_set"`
	Metric       *GetSimCompareMetricEnum `queryParam:"style=form,explode=true,name=metric"`
	QueryID      []string                 `queryParam:"style=form,explode=true,name=query_id"`
	RefID        []string                 `queryParam:"style=form,explode=true,name=ref_id"`
}

type GetSimCompareRequest struct {
	QueryParams GetSimCompareQueryParams
}

type GetSimCompareResponse struct {
	ContentType string
	SimResult   *shared.SimResult
	StatusCode  int64
}
