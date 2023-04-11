import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountLoginResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
