import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetnexteventsSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetnexteventsRequest extends SpeakeasyBase {
    /**
     * Your request will retrieve events occured before this one
     */
    eventId: string;
    /**
     * ID of the Home you're interested in
     */
    homeId: string;
    /**
     * Number of events to retrieve. Default is 30.
     */
    size?: number;
}
export declare class GetnexteventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeEventResponse?: shared.NAWelcomeEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
