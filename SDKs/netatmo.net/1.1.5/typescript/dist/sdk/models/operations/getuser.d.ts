import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetuserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naUserResponse?: shared.NAUserResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
