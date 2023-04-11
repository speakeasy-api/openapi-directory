import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDlQueryRequest extends SpeakeasyBase {
    query: string;
}
export declare class GetDlQueryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
