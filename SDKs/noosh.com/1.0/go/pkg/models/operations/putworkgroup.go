package operations

type PutWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PutWorkgroupRequests struct {
	ApplicationXML         []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml       []byte       `request:"mediaType=application/x-yaml"`
	TextCsv                []byte       `request:"mediaType=text/csv"`
	TextXML                []byte       `request:"mediaType=text/xml"`
	TextXYaml              []byte       `request:"mediaType=text/x-yaml"`
	WorkgroupUpdPersistVO  *interface{} `request:"mediaType=application/json"`
	WorkgroupUpdPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
}

type PutWorkgroupRequest struct {
	PathParams PutWorkgroupPathParams
	Request    *PutWorkgroupRequests
}

type PutWorkgroupResponse struct {
	Body                  []byte
	ContentType           string
	HTTPStatusVO          *interface{}
	StatusCode            int64
	WorkgroupHTTPStatusVO *interface{}
}
