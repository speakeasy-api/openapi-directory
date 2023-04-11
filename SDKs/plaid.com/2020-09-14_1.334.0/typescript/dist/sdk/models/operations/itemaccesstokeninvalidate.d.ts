import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemAccessTokenInvalidateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemAccessTokenInvalidateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
