import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsRequest extends SpeakeasyBase {
    /**
     * The number of records to return in each page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    listTagsResponse?: shared.ListTagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
