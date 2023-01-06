package operations

type HooksPostActionEnum string

const (
	HooksPOSTActionEnumSubscribe   HooksPostActionEnum = "subscribe"
	HooksPOSTActionEnumUnsubscribe HooksPostActionEnum = "unsubscribe"
)

type HooksPostEventTypeEnum string

const (
	HooksPOSTEventTypeEnumAll         HooksPostEventTypeEnum = "all"
	HooksPOSTEventTypeEnumSmsMo       HooksPostEventTypeEnum = "sms_mo"
	HooksPOSTEventTypeEnumDlr         HooksPostEventTypeEnum = "dlr"
	HooksPOSTEventTypeEnumVoiceStatus HooksPostEventTypeEnum = "voice_status"
)

type HooksPostRequestMethodEnum string

const (
	HooksPOSTRequestMethodEnumPost HooksPostRequestMethodEnum = "POST"
	HooksPOSTRequestMethodEnumJSON HooksPostRequestMethodEnum = "JSON"
	HooksPOSTRequestMethodEnumGet  HooksPostRequestMethodEnum = "GET"
)

type HooksPostQueryParams struct {
	Action        HooksPostActionEnum         `queryParam:"style=form,explode=true,name=action"`
	EventType     *HooksPostEventTypeEnum     `queryParam:"style=form,explode=true,name=event_type"`
	ID            *int64                      `queryParam:"style=form,explode=true,name=id"`
	RequestMethod *HooksPostRequestMethodEnum `queryParam:"style=form,explode=true,name=request_method"`
	TargetURL     *string                     `queryParam:"style=form,explode=true,name=target_url"`
}

type HooksPost200ApplicationJSON struct {
	ID      *int64 `json:"id,omitempty"`
	Success *bool  `json:"success,omitempty"`
}

type HooksPostRequest struct {
	QueryParams HooksPostQueryParams
}

type HooksPostResponse struct {
	ContentType                       string
	HooksPOST200ApplicationJSONObject *HooksPost200ApplicationJSON
	StatusCode                        int64
}
