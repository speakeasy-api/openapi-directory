import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCompositionServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCompositionRequest extends SpeakeasyBase {
    /**
     * The SID of the Composition resource to fetch.
     */
    sid: string;
}
export declare class FetchCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1Composition?: shared.VideoV1Composition;
}
