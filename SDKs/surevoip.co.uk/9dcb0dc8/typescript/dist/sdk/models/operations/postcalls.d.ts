import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCallsRequestBodyOptionsPlayAudio extends SpeakeasyBase {
    /**
     * Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example.
     *
     * @remarks
     * Have lots of audio files in this array to build up a message
     *
     */
    announcementId?: string;
}
export declare class PostCallsRequestBodyOptions extends SpeakeasyBase {
    /**
     * Change the caller ID shown to the a leg (from)
     */
    aLegCallerId?: string;
    /**
     * Do not ring the "to" number, only the from and show "caller_id"
     */
    aLegOnly?: number;
    /**
     * The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2
     */
    cancelKey?: number;
    /**
     * The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1
     */
    connectKey?: number;
    playAudio?: PostCallsRequestBodyOptionsPlayAudio[];
}
/**
 * Create a phone call and play announcement audio to the "from" party (a leg)
 */
export declare class PostCallsRequestBody extends SpeakeasyBase {
    /**
     * is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required
     *
     * @remarks
     *
     */
    announcementAt?: string;
    /**
     * is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required
     *
     * @remarks
     *
     */
    announcementId?: string;
    /**
     * The caller ID to show the b leg (to).
     */
    callerId: string;
    /**
     * The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung
     */
    from: string;
    /**
     * the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.
     *
     * @remarks
     *
     */
    hangupAnnouncementId?: string;
    /**
     * length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup
     *
     * @remarks
     *
     */
    hangupAt?: string;
    options?: PostCallsRequestBodyOptions;
    /**
     * The b leg of the call, i.e. the person you are calling
     */
    to: string;
}
/**
 * Call creation request accepted.
 */
export declare class PostCalls202ApplicationJSON extends SpeakeasyBase {
    call?: string;
    location?: string;
}
export declare class PostCallsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Call creation request accepted.
     */
    postCalls202ApplicationJSONObject?: PostCalls202ApplicationJSON;
    /**
     * Bad data
     */
    oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;
    /**
     * Only customer accounts can create calls.
     */
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
