import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeteventsuntilSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GeteventsuntilRequest extends SpeakeasyBase {
    /**
     * Your request will retrieve all the events until this one
     */
    eventId: string;
    /**
     * ID of the Home you're interested in
     */
    homeId: string;
}
export declare class GeteventsuntilResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeEventResponse?: shared.NAWelcomeEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
