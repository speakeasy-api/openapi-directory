package operations

type FindIncludeLicensedContentEnum string

const (
	FindIncludeLicensedContentEnumYes FindIncludeLicensedContentEnum = "yes"
	FindIncludeLicensedContentEnumNo  FindIncludeLicensedContentEnum = " no"
)

type FindIncludeSpellcheckEnum string

const (
	FindIncludeSpellcheckEnumYes FindIncludeSpellcheckEnum = "yes"
	FindIncludeSpellcheckEnumNo  FindIncludeSpellcheckEnum = " no"
)

type FindIncludeTestEnum string

const (
	FindIncludeTestEnumYes  FindIncludeTestEnum = "yes"
	FindIncludeTestEnumNo   FindIncludeTestEnum = " no"
	FindIncludeTestEnumOnly FindIncludeTestEnum = " only"
)

type FindSourceEnum string

const (
	FindSourceEnumTicketmaster FindSourceEnum = "ticketmaster"
	FindSourceEnumUniverse     FindSourceEnum = " universe"
	FindSourceEnumFrontgate    FindSourceEnum = " frontgate"
	FindSourceEnumTmr          FindSourceEnum = " tmr"
)

type FindQueryParams struct {
	ClassificationID       []interface{}                   `queryParam:"style=form,explode=true,name=classificationId"`
	ClassificationName     []interface{}                   `queryParam:"style=form,explode=true,name=classificationName"`
	ID                     *string                         `queryParam:"style=form,explode=true,name=id"`
	IncludeLicensedContent *FindIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	IncludeSpellcheck      *FindIncludeSpellcheckEnum      `queryParam:"style=form,explode=true,name=includeSpellcheck"`
	IncludeTest            *FindIncludeTestEnum            `queryParam:"style=form,explode=true,name=includeTest"`
	Keyword                *string                         `queryParam:"style=form,explode=true,name=keyword"`
	Locale                 *string                         `queryParam:"style=form,explode=true,name=locale"`
	Page                   *string                         `queryParam:"style=form,explode=true,name=page"`
	Size                   *string                         `queryParam:"style=form,explode=true,name=size"`
	Sort                   *string                         `queryParam:"style=form,explode=true,name=sort"`
	Source                 *FindSourceEnum                 `queryParam:"style=form,explode=true,name=source"`
}

type FindRequest struct {
	QueryParams FindQueryParams
}

type FindResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
