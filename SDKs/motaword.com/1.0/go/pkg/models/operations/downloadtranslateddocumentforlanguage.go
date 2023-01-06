package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadTranslatedDocumentForLanguagePathParams struct {
	DocumentID int64  `pathParam:"style=simple,explode=false,name=documentId"`
	Language   string `pathParam:"style=simple,explode=false,name=language"`
	ProjectID  int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type DownloadTranslatedDocumentForLanguageQueryParams struct {
	Certified *bool `queryParam:"style=form,explode=true,name=certified"`
}

type DownloadTranslatedDocumentForLanguageRequest struct {
	PathParams  DownloadTranslatedDocumentForLanguagePathParams
	QueryParams DownloadTranslatedDocumentForLanguageQueryParams
}

type DownloadTranslatedDocumentForLanguageResponse struct {
	ContentType                                                                string
	Error                                                                      *shared.Error
	StatusCode                                                                 int64
	DownloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString []byte
}
