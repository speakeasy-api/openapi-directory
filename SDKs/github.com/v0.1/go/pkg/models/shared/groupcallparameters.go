// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GroupCallParameters - POST parameters
type GroupCallParameters struct {
	// Fully qualified URL which will provide the RestXML once the call connects
	AnswerURL string `form:"name=AnswerUrl"`
	// Caller Name to be set for the call
	CallerName *string `form:"name=CallerName"`
	// DTMF tone the called party must send to accept the call
	ConfirmKey *string `form:"name=ConfirmKey"`
	// Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered
	ConfirmSound *string `form:"name=ConfirmSound"`
	// Core UUID of the desired FreeSWITCH instance (an Eqivo extension)
	CoreUUID *string `form:"name=CoreUUID"`
	// Any character, except `/` and `,`, which will be used as a separator within several parameters
	Delimiter string `form:"name=Delimiter"`
	// Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call.
	ExtraDialString *string `form:"name=ExtraDialString"`
	// Phone number to be used as Caller ID
	From string `form:"name=From"`
	// List of codec(s) to be used for each gateway. Enclose codec groups in single quotes
	GatewayCodecs *string `form:"name=GatewayCodecs"`
	// List of maximum retry counts for each gateway
	GatewayRetries *string `form:"name=GatewayRetries"`
	// List of maximum timeout amounts (in seconds) for each gateway
	GatewayTimeouts *string `form:"name=GatewayTimeouts"`
	// Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
	Gateways string `form:"name=Gateways"`
	// Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
	HangupOnRing *int64 `form:"name=HangupOnRing"`
	// Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters)
	HangupURL *string `form:"name=HangupUrl"`
	// Comma separated reject causes
	RejectCauses *string `form:"name=RejectCauses"`
	// Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters)
	RingURL *string `form:"name=RingUrl"`
	// DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string
	SendDigits *string `form:"name=SendDigits"`
	// When set to `true`, DTMF tones will be sent as early media rather than when the call is answered
	SendOnPreanswer *bool `form:"name=SendOnPreanswer"`
	// Schedules the call's hangup at a given time offset (in seconds) after the call is answered
	TimeLimit *int64 `form:"name=TimeLimit"`
	// Phone number to be called
	To string `form:"name=To"`
}
