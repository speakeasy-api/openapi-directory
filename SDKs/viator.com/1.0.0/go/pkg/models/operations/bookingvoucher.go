package operations

type BookingVoucherQueryParams struct {
	EmbeddedResources *bool   `queryParam:"style=form,explode=true,name=embeddedResources"`
	FullHTML          *bool   `queryParam:"style=form,explode=true,name=fullHTML"`
	ItemID            *int64  `queryParam:"style=form,explode=true,name=itemId"`
	LeadLastName      *string `queryParam:"style=form,explode=true,name=leadLastName"`
	MobileVoucher     *bool   `queryParam:"style=form,explode=true,name=mobileVoucher"`
	VoucherKey        *string `queryParam:"style=form,explode=true,name=voucherKey"`
}

type BookingVoucherHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingVoucher200ApplicationJSON struct {
	Data *string `json:"data,omitempty"`
}

type BookingVoucherRequest struct {
	QueryParams BookingVoucherQueryParams
	Headers     BookingVoucherHeaders
}

type BookingVoucherResponse struct {
	ContentType                            string
	StatusCode                             int64
	BookingVoucher200ApplicationJSONObject *BookingVoucher200ApplicationJSON
}
