import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMediaServerList: readonly ["https://api.twilio.com"];
export declare class FetchMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Media resource(s) to fetch.
     */
    accountSid: string;
    /**
     * The SID of the Message resource that this Media resource belongs to.
     */
    messageSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Media resource to fetch
     */
    sid: string;
}
export declare class FetchMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountMessageMedia?: shared.ApiV2010AccountMessageMedia;
}
