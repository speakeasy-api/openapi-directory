import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConferenceServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConferenceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
 */
export declare enum UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateConferenceUpdateConferenceRequest extends SpeakeasyBase {
    /**
     * The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
     */
    announceMethod?: UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;
    /**
     * The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
     */
    announceUrl?: string;
    status?: shared.ConferenceEnumUpdateStatusEnum;
}
export declare class UpdateConferenceRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to update.
     */
    accountSid: string;
    requestBody?: UpdateConferenceUpdateConferenceRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Conference resource to update
     */
    sid: string;
}
export declare class UpdateConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
