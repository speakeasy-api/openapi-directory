import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV05CertsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    certs?: shared.Certs;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid consent request id
     *
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
