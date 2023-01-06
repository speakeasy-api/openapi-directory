package operations

import (
	"openapi/pkg/models/shared"
)

type Html5RenderRequestBody struct {
	Content          string   `form:"name=content"`
	CSS              *string  `form:"name=css"`
	FooterFont       *string  `form:"name=footer-font"`
	FooterFontSize   *int32   `form:"name=footer-font-size"`
	FooterLine       *bool    `form:"name=footer-line"`
	FooterSize       *int32   `form:"name=footer-size"`
	FooterTextCenter *string  `form:"name=footer-text-center"`
	FooterTextLeft   *string  `form:"name=footer-text-left"`
	FooterTextRight  *string  `form:"name=footer-text-right"`
	Format           *string  `form:"name=format"`
	Forms            *bool    `form:"name=forms"`
	Grayscale        *bool    `form:"name=grayscale"`
	HeaderFont       *string  `form:"name=header-font"`
	HeaderFontSize   *int32   `form:"name=header-font-size"`
	HeaderLine       *bool    `form:"name=header-line"`
	HeaderSize       *int32   `form:"name=header-size"`
	HeaderTextCenter *string  `form:"name=header-text-center"`
	HeaderTextLeft   *string  `form:"name=header-text-left"`
	HeaderTextRight  *string  `form:"name=header-text-right"`
	ImageHeight      *int32   `form:"name=image-height"`
	ImageWidth       *int32   `form:"name=image-width"`
	Landscape        *bool    `form:"name=landscape"`
	Margin           *int32   `form:"name=margin"`
	MarginBottom     *int32   `form:"name=margin-bottom"`
	MarginLeft       *int32   `form:"name=margin-left"`
	MarginRight      *int32   `form:"name=margin-right"`
	MarginTop        *int32   `form:"name=margin-top"`
	MediaPrint       *bool    `form:"name=media-print"`
	MediaQueries     *bool    `form:"name=media-queries"`
	PageHeight       *int32   `form:"name=page-height"`
	PageSize         *string  `form:"name=page-size"`
	PageWidth        *int32   `form:"name=page-width"`
	RenderDelay      *int32   `form:"name=render-delay"`
	Title            *string  `form:"name=title"`
	Zoom             *float64 `form:"name=zoom"`
}

type Html5RenderRequest struct {
	Request Html5RenderRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type Html5RenderResponse struct {
	APIError                                  *shared.APIError
	ContentType                               string
	Html5Render200ApplicationJSONBinaryString []byte
	StatusCode                                int64
}
