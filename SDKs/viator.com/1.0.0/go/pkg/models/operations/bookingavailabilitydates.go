package operations

type BookingAvailabilityDatesQueryParams struct {
	ProductCode *string `queryParam:"style=form,explode=true,name=productCode"`
}

type BookingAvailabilityDatesHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingAvailabilityDates200ApplicationJSON struct {
	Data map[string][]string `json:"data,omitempty"`
}

type BookingAvailabilityDatesRequest struct {
	QueryParams BookingAvailabilityDatesQueryParams
	Headers     BookingAvailabilityDatesHeaders
}

type BookingAvailabilityDatesResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	BookingAvailabilityDates200ApplicationJSONObject *BookingAvailabilityDates200ApplicationJSON
}
