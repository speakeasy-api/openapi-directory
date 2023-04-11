import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAppServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAppRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies this App.
     */
    sid: string;
}
export declare class FetchAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1App?: shared.MicrovisorV1App;
}
