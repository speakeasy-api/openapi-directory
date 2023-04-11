import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchContentServerList: readonly ["https://content.twilio.com"];
export declare class FetchContentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchContentRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Content resource to fetch.
     */
    sid: string;
}
export declare class FetchContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    contentV1Content?: shared.ContentV1Content;
}
