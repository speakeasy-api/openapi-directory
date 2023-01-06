package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPopularPairsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserPopularPairsSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserPopularPairsRequest struct {
	PathParams GetUserPopularPairsPathParams
	Security   GetUserPopularPairsSecurity
}

type GetUserPopularPairsResponse struct {
	ContentType          string
	Error                *shared.Error
	PopularLanguagePairs *shared.PopularLanguagePairs
	StatusCode           int64
}
