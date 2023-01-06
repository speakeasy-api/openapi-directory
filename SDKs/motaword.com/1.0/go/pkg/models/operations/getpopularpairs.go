package operations

import (
	"openapi/pkg/models/shared"
)

type GetPopularPairsResponse struct {
	ContentType          string
	Error                *shared.Error
	PopularLanguagePairs *shared.PopularLanguagePairs
	StatusCode           int64
}
