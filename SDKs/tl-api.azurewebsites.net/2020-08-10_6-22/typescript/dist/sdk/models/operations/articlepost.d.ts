import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticlePostResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    /**
     * messageId that can use to get the status of import later on.!
     */
    defaultResponseDTOOfStatusDTO?: shared.DefaultResponseDTOOfStatusDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
