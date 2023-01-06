package operations

type ListHistoricalGwsColorEnum string

const (
	ListHistoricalGWSColorEnumRed   ListHistoricalGwsColorEnum = "red"
	ListHistoricalGWSColorEnumWhite ListHistoricalGwsColorEnum = "white"
	ListHistoricalGWSColorEnumPink  ListHistoricalGwsColorEnum = "pink"
)

type ListHistoricalGwsOrderingEnum string

const (
	ListHistoricalGWSOrderingEnumDate       ListHistoricalGwsOrderingEnum = "date"
	ListHistoricalGWSOrderingEnumMinusDate  ListHistoricalGwsOrderingEnum = "-date"
	ListHistoricalGWSOrderingEnumScore      ListHistoricalGwsOrderingEnum = "score"
	ListHistoricalGWSOrderingEnumMinusScore ListHistoricalGwsOrderingEnum = "-score"
)

type ListHistoricalGwsQueryParams struct {
	Color      *ListHistoricalGwsColorEnum    `queryParam:"style=form,explode=true,name=color"`
	IsPrimeurs *bool                          `queryParam:"style=form,explode=true,name=is_primeurs"`
	Limit      *int64                         `queryParam:"style=form,explode=true,name=limit"`
	Lwin       *string                        `queryParam:"style=form,explode=true,name=lwin"`
	Lwin11     *string                        `queryParam:"style=form,explode=true,name=lwin_11"`
	Offset     *int64                         `queryParam:"style=form,explode=true,name=offset"`
	Ordering   *ListHistoricalGwsOrderingEnum `queryParam:"style=form,explode=true,name=ordering"`
	Vintage    *string                        `queryParam:"style=form,explode=true,name=vintage"`
	WineID     []int64                        `queryParam:"style=form,explode=true,name=wine_id"`
}

type ListHistoricalGwsHeaders struct {
	Authorization *string `header:"style=simple,explode=false,name=Authorization"`
}

type ListHistoricalGwsRequest struct {
	QueryParams ListHistoricalGwsQueryParams
	Headers     ListHistoricalGwsHeaders
}

type ListHistoricalGwsResponse struct {
	ContentType string
	StatusCode  int64
}
