package operations

type SendAnSmsFormatEnum string

const (
	SendAnSmsFormatEnumJSON SendAnSmsFormatEnum = "json"
	SendAnSmsFormatEnumXML  SendAnSmsFormatEnum = "xml"
)

type SendAnSmsPathParams struct {
	Format SendAnSmsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type SendAnSmsRequest struct {
	PathParams SendAnSmsPathParams
	Request    interface{} `request:"mediaType=application/x-www-form-urlencoded"`
}

type SendAnSmsResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	SendAnSms200ApplicationJSONOneOf *interface{}
}
