import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetlasteventofSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetlasteventofRequest extends SpeakeasyBase {
    /**
     * ID of the Home you're interested in
     */
    homeId: string;
    /**
     * Number of events to retrieve. Default is 30.
     */
    offset?: number;
    /**
     * Your request will retrieve all events of the given home until the most recent event of the given person
     */
    personId: string;
}
export declare class GetlasteventofResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeEventResponse?: shared.NAWelcomeEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
