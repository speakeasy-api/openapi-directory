package operations

import (
	"openapi/pkg/models/shared"
)

type PutQuoteImageQueryParams struct {
	BgColor                 *string `queryParam:"style=form,explode=true,name=bg_color"`
	BgimageID               *string `queryParam:"style=form,explode=true,name=bgimage_id"`
	Branding                *bool   `queryParam:"style=form,explode=true,name=branding"`
	FontID                  *string `queryParam:"style=form,explode=true,name=font_id"`
	Halign                  *string `queryParam:"style=form,explode=true,name=halign"`
	Height                  *int64  `queryParam:"style=form,explode=true,name=height"`
	IncludeTransparentLayer *bool   `queryParam:"style=form,explode=true,name=include_transparent_layer"`
	QuoteID                 string  `queryParam:"style=form,explode=true,name=quote_id"`
	TextColor               *string `queryParam:"style=form,explode=true,name=text_color"`
	TextSize                *string `queryParam:"style=form,explode=true,name=text_size"`
	Valign                  *string `queryParam:"style=form,explode=true,name=valign"`
	Width                   *int64  `queryParam:"style=form,explode=true,name=width"`
}

type PutQuoteImageSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutQuoteImageRequest struct {
	QueryParams PutQuoteImageQueryParams
	Security    PutQuoteImageSecurity
}

type PutQuoteImageResponse struct {
	ContentType string
	StatusCode  int64
}
