package operations

import (
	"openapi/pkg/models/shared"
)

type BookingStatusItemsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

// BookingStatusItemsRequestBody
// **note**: all items are optional, but at least one needs to be included
type BookingStatusItemsRequestBody struct {
	BookingDateFrom     *string  `json:"bookingDateFrom,omitempty"`
	BookingDateTo       *string  `json:"bookingDateTo,omitempty"`
	DistributorItemRefs []string `json:"distributorItemRefs,omitempty"`
	DistributorRefs     []string `json:"distributorRefs,omitempty"`
	ItemIds             []int64  `json:"itemIds,omitempty"`
	LeadFirstName       *string  `json:"leadFirstName,omitempty"`
	LeadSurname         *string  `json:"leadSurname,omitempty"`
	Test                *bool    `json:"test,omitempty"`
}

type BookingStatusItems200ApplicationJSONData struct {
	BookingStatus      *shared.BookingStatusItem `json:"bookingStatus,omitempty"`
	DistributorItemRef *string                   `json:"distributorItemRef,omitempty"`
	ItemID             *int64                    `json:"itemId,omitempty"`
}

type BookingStatusItems200ApplicationJSON struct {
	Data []BookingStatusItems200ApplicationJSONData `json:"data,omitempty"`
}

type BookingStatusItemsRequest struct {
	Headers BookingStatusItemsHeaders
	Request *BookingStatusItemsRequestBody `request:"mediaType=application/json"`
}

type BookingStatusItemsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	BookingStatusItems200ApplicationJSONObject *BookingStatusItems200ApplicationJSON
}
