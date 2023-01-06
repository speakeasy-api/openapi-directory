package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserDocumentsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserDocumentsOrderByEnum string

const (
	GetUserDocumentsOrderByEnumID        GetUserDocumentsOrderByEnum = "id"
	GetUserDocumentsOrderByEnumUpdatedAt GetUserDocumentsOrderByEnum = "updated_at"
	GetUserDocumentsOrderByEnumCreatedAt GetUserDocumentsOrderByEnum = "created_at"
	GetUserDocumentsOrderByEnumName      GetUserDocumentsOrderByEnum = "name"
)

type GetUserDocumentsTypeFilterEnum string

const (
	GetUserDocumentsTypeFilterEnumAll           GetUserDocumentsTypeFilterEnum = "ALL"
	GetUserDocumentsTypeFilterEnumTextDocuments GetUserDocumentsTypeFilterEnum = "TEXT_DOCUMENTS"
	GetUserDocumentsTypeFilterEnumPresentations GetUserDocumentsTypeFilterEnum = "PRESENTATIONS"
	GetUserDocumentsTypeFilterEnumSpreadsheets  GetUserDocumentsTypeFilterEnum = "SPREADSHEETS"
	GetUserDocumentsTypeFilterEnumPdfs          GetUserDocumentsTypeFilterEnum = "PDFS"
	GetUserDocumentsTypeFilterEnumImages        GetUserDocumentsTypeFilterEnum = "IMAGES"
	GetUserDocumentsTypeFilterEnumSubtitles     GetUserDocumentsTypeFilterEnum = "SUBTITLES"
	GetUserDocumentsTypeFilterEnumDesigns       GetUserDocumentsTypeFilterEnum = "DESIGNS"
	GetUserDocumentsTypeFilterEnumLocalization  GetUserDocumentsTypeFilterEnum = "LOCALIZATION"
	GetUserDocumentsTypeFilterEnumWeb           GetUserDocumentsTypeFilterEnum = "WEB"
	GetUserDocumentsTypeFilterEnumStyleGuides   GetUserDocumentsTypeFilterEnum = "STYLE_GUIDES"
	GetUserDocumentsTypeFilterEnumGlossaries    GetUserDocumentsTypeFilterEnum = "GLOSSARIES"
)

type GetUserDocumentsQueryParams struct {
	LanguageCode *string                         `queryParam:"style=form,explode=true,name=language_code"`
	OrderBy      *GetUserDocumentsOrderByEnum    `queryParam:"style=form,explode=true,name=order_by"`
	OrderType    *shared.ListOrderTypeEnum       `queryParam:"style=form,explode=true,name=order_type"`
	Page         *int64                          `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64                          `queryParam:"style=form,explode=true,name=per_page"`
	Recent       *bool                           `queryParam:"style=form,explode=true,name=recent"`
	Search       *string                         `queryParam:"style=form,explode=true,name=search"`
	TypeFilter   *GetUserDocumentsTypeFilterEnum `queryParam:"style=form,explode=true,name=type_filter"`
}

type GetUserDocumentsRequest struct {
	PathParams  GetUserDocumentsPathParams
	QueryParams GetUserDocumentsQueryParams
}

type GetUserDocumentsResponse struct {
	ContentType  string
	DocumentList *shared.DocumentList
	StatusCode   int64
}
