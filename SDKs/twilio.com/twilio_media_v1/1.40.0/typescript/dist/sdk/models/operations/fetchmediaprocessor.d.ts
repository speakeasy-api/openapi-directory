import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMediaProcessorServerList: readonly ["https://media.twilio.com"];
export declare class FetchMediaProcessorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMediaProcessorRequest extends SpeakeasyBase {
    /**
     * The SID of the MediaProcessor resource to fetch.
     */
    sid: string;
}
export declare class FetchMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
