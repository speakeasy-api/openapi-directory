import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDefaultPageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
