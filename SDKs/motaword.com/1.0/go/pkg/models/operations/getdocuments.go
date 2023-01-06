package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentsOrderByEnum string

const (
	GetDocumentsOrderByEnumID        GetDocumentsOrderByEnum = "id"
	GetDocumentsOrderByEnumUpdatedAt GetDocumentsOrderByEnum = "updated_at"
	GetDocumentsOrderByEnumCreatedAt GetDocumentsOrderByEnum = "created_at"
	GetDocumentsOrderByEnumName      GetDocumentsOrderByEnum = "name"
)

type GetDocumentsTypeFilterEnum string

const (
	GetDocumentsTypeFilterEnumAll           GetDocumentsTypeFilterEnum = "ALL"
	GetDocumentsTypeFilterEnumTextDocuments GetDocumentsTypeFilterEnum = "TEXT_DOCUMENTS"
	GetDocumentsTypeFilterEnumPresentations GetDocumentsTypeFilterEnum = "PRESENTATIONS"
	GetDocumentsTypeFilterEnumSpreadsheets  GetDocumentsTypeFilterEnum = "SPREADSHEETS"
	GetDocumentsTypeFilterEnumPdfs          GetDocumentsTypeFilterEnum = "PDFS"
	GetDocumentsTypeFilterEnumImages        GetDocumentsTypeFilterEnum = "IMAGES"
	GetDocumentsTypeFilterEnumSubtitles     GetDocumentsTypeFilterEnum = "SUBTITLES"
	GetDocumentsTypeFilterEnumDesigns       GetDocumentsTypeFilterEnum = "DESIGNS"
	GetDocumentsTypeFilterEnumLocalization  GetDocumentsTypeFilterEnum = "LOCALIZATION"
	GetDocumentsTypeFilterEnumWeb           GetDocumentsTypeFilterEnum = "WEB"
	GetDocumentsTypeFilterEnumStyleGuides   GetDocumentsTypeFilterEnum = "STYLE_GUIDES"
	GetDocumentsTypeFilterEnumGlossaries    GetDocumentsTypeFilterEnum = "GLOSSARIES"
)

type GetDocumentsWithEnum string

const (
	GetDocumentsWithEnumPreview GetDocumentsWithEnum = "preview"
	GetDocumentsWithEnumEditors GetDocumentsWithEnum = "editors"
)

type GetDocumentsQueryParams struct {
	LanguageCode *string                     `queryParam:"style=form,explode=true,name=language_code"`
	OrderBy      *GetDocumentsOrderByEnum    `queryParam:"style=form,explode=true,name=order_by"`
	OrderType    *shared.ListOrderTypeEnum   `queryParam:"style=form,explode=true,name=order_type"`
	Page         *int64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64                      `queryParam:"style=form,explode=true,name=per_page"`
	Recent       *bool                       `queryParam:"style=form,explode=true,name=recent"`
	Search       *string                     `queryParam:"style=form,explode=true,name=search"`
	TypeFilter   *GetDocumentsTypeFilterEnum `queryParam:"style=form,explode=true,name=type_filter"`
	With         []GetDocumentsWithEnum      `queryParam:"style=form,explode=true,name=with[]"`
}

type GetDocumentsRequest struct {
	QueryParams GetDocumentsQueryParams
}

type GetDocumentsResponse struct {
	ContentType  string
	DocumentList *shared.DocumentList
	StatusCode   int64
}
