import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAppManifestServerList: readonly ["https://microvisor.twilio.com"];
export declare class FetchAppManifestSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAppManifestRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies this App.
     */
    appSid: string;
}
export declare class FetchAppManifestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    microvisorV1AppAppManifest?: shared.MicrovisorV1AppAppManifest;
}
