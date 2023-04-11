import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchOrdersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchOrdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchOrdersResponse?: shared.SearchOrdersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
