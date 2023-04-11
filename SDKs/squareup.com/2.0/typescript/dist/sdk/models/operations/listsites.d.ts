import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSitesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSitesResponse?: shared.ListSitesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
