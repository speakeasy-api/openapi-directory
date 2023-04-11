import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilterContentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Filter contents
     */
    filterContents?: shared.FilterContents;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
