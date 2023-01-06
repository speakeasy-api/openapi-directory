package operations

type BookingHotelsQueryParams struct {
	DestID      *int64  `queryParam:"style=form,explode=true,name=destId"`
	ProductCode *string `queryParam:"style=form,explode=true,name=productCode"`
}

type BookingHotelsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingHotels200ApplicationJSONData struct {
	Address       *string  `json:"address,omitempty"`
	Brand         *string  `json:"brand,omitempty"`
	City          *string  `json:"city,omitempty"`
	DestinationID *int64   `json:"destinationId,omitempty"`
	HotelString   *string  `json:"hotelString,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Latitude      *float64 `json:"latitude,omitempty"`
	Longitude     *float64 `json:"longitude,omitempty"`
	Name          *string  `json:"name,omitempty"`
	Notes         *string  `json:"notes,omitempty"`
	Phone         *string  `json:"phone,omitempty"`
	Postcode      *string  `json:"postcode,omitempty"`
	ProductCodes  []string `json:"productCodes,omitempty"`
	SortOrder     *int64   `json:"sortOrder,omitempty"`
}

type BookingHotels200ApplicationJSON struct {
	Data []BookingHotels200ApplicationJSONData `json:"data,omitempty"`
}

type BookingHotelsRequest struct {
	QueryParams BookingHotelsQueryParams
	Headers     BookingHotelsHeaders
}

type BookingHotelsResponse struct {
	ContentType                           string
	StatusCode                            int64
	BookingHotels200ApplicationJSONObject *BookingHotels200ApplicationJSON
}
