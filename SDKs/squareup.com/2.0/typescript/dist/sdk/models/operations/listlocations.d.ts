import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
