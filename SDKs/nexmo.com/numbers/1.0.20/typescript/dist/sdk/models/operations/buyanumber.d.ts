import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BuyANumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    response?: shared.Response;
    /**
     * Action failed
     */
    response420?: shared.Response420;
    /**
     * Unauthorized
     */
    unauthorized?: shared.Unauthorized;
}
