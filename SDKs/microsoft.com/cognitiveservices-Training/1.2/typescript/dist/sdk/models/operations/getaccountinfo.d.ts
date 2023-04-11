import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountInfoRequest extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetAccountInfoResponse extends SpeakeasyBase {
    /**
     * OK
     */
    account?: shared.Account;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
