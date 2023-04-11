import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchTerminalCheckoutsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchTerminalCheckoutsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchTerminalCheckoutsResponse?: shared.SearchTerminalCheckoutsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
