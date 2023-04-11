import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GethomedataSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GethomedataRequest extends SpeakeasyBase {
    /**
     * Specify if you're looking for the events of a specific Home.
     */
    homeId?: string;
    /**
     * Number of events to retrieve. Default is `30`.
     */
    size?: number;
}
export declare class GethomedataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeHomeDataResponse?: shared.NAWelcomeHomeDataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
