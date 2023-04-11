import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class BulkCallParameters extends SpeakeasyBase {
    /**
     * Fully qualified URL which will provide the RestXML once the call connects
     */
    answerUrl: string;
    /**
     * Caller Name to be set for the call
     */
    callerName?: string;
    /**
     * DTMF tone the called party must send to accept the call
     */
    confirmKey?: string;
    /**
     * Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered
     */
    confirmSound?: string;
    /**
     * Core UUID of the desired FreeSWITCH instance (an Eqivo extension)
     */
    coreUUID?: string;
    /**
     * Any character, except `/` and `,`, which will be used as a separator within several parameters
     */
    delimiter: string;
    /**
     * Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call.
     */
    extraDialString?: string;
    /**
     * Phone number to be used as Caller ID
     */
    from: string;
    /**
     * List of codec(s) to be used for each gateway. Enclose codec groups in single quotes
     */
    gatewayCodecs?: string;
    /**
     * List of maximum retry counts for each gateway
     */
    gatewayRetries?: string;
    /**
     * List of maximum timeout amounts (in seconds) for each gateway
     */
    gatewayTimeouts?: string;
    /**
     * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
     */
    gateways: string;
    /**
     * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
     */
    hangupOnRing?: number;
    /**
     * Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters)
     */
    hangupUrl?: string;
    /**
     * Comma separated reject causes
     */
    rejectCauses?: string;
    /**
     * Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters)
     */
    ringUrl?: string;
    /**
     * DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string
     */
    sendDigits?: string;
    /**
     * When set to `true`, DTMF tones will be sent as early media rather than when the call is answered
     */
    sendOnPreanswer?: boolean;
    /**
     * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
     */
    timeLimit?: number;
    /**
     * Phone number to be called
     */
    to: string;
}
