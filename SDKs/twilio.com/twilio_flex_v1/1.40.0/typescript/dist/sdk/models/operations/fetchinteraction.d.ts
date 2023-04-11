import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInteractionServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInteractionRequest extends SpeakeasyBase {
    /**
     * The SID of the Interaction resource to fetch.
     */
    sid: string;
}
export declare class FetchInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1Interaction?: shared.FlexV1Interaction;
}
