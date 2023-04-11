import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchOpenidDiscoveryServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchOpenidDiscoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    oauthV1OpenidDiscovery?: shared.OauthV1OpenidDiscovery;
}
