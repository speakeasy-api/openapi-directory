package operations

type TextToImageQueryParams struct {
	Animation       string `queryParam:"style=form,explode=true,name=animation"`
	Author          string `queryParam:"style=form,explode=true,name=author"`
	AuthorFont      string `queryParam:"style=form,explode=true,name=authorFont"`
	AuthorFontColor string `queryParam:"style=form,explode=true,name=authorFontColor"`
	BackgroundColor string `queryParam:"style=form,explode=true,name=backgroundColor"`
	BgType          string `queryParam:"style=form,explode=true,name=bgType"`
	BrandLogo       string `queryParam:"style=form,explode=true,name=brandLogo"`
	EnableHighlight int64  `queryParam:"style=form,explode=true,name=enableHighlight"`
	FontSize        int64  `queryParam:"style=form,explode=true,name=fontSize"`
	GradientColor1  string `queryParam:"style=form,explode=true,name=gradientColor1"`
	GradientColor2  string `queryParam:"style=form,explode=true,name=gradientColor2"`
	GradientType    string `queryParam:"style=form,explode=true,name=gradientType"`
	HighlightColor  string `queryParam:"style=form,explode=true,name=highlightColor"`
	Quote           string `queryParam:"style=form,explode=true,name=quote"`
	QuoteFont       string `queryParam:"style=form,explode=true,name=quoteFont"`
	QuoteFontColor  string `queryParam:"style=form,explode=true,name=quoteFontColor"`
	ShowQuoteMark   *int64 `queryParam:"style=form,explode=true,name=showQuoteMark"`
}

type TextToImageRequest struct {
	QueryParams TextToImageQueryParams
}

type TextToImageResponse struct {
	ContentType string
	StatusCode  int64
}
