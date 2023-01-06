package operations

type UpdatePathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type UpdateRequests struct {
	ApplicationXML      []byte       `request:"mediaType=application/xml"`
	SubscriptionUpdate  *interface{} `request:"mediaType=application/json"`
	SubscriptionUpdate1 *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML             []byte       `request:"mediaType=text/xml"`
}

type UpdateRequest struct {
	PathParams UpdatePathParams
	Request    UpdateRequests
}

type UpdateResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
