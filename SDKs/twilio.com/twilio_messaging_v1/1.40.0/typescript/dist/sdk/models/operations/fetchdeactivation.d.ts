import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeactivationServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDeactivationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeactivationRequest extends SpeakeasyBase {
    /**
     * The request will return a list of all United States Phone Numbers that were deactivated on the day specified by this parameter. This date should be specified in YYYY-MM-DD format.
     */
    date?: Date;
}
export declare class FetchDeactivationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Temporary Redirect
     */
    messagingV1Deactivation?: shared.MessagingV1Deactivation;
}
