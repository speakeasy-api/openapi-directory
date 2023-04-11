import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCertsServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchCertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    oauthV1Certs?: shared.OauthV1Certs;
}
