import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkAccessProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchNetworkAccessProfileRequest extends SpeakeasyBase {
    /**
     * The SID of the Network Access Profile resource to fetch.
     */
    sid: string;
}
export declare class FetchNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
