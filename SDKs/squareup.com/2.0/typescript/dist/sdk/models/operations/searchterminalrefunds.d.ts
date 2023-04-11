import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchTerminalRefundsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchTerminalRefundsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchTerminalRefundsResponse?: shared.SearchTerminalRefundsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
