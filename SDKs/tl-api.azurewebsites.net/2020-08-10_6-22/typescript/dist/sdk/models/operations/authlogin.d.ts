import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AuthLoginResponse extends SpeakeasyBase {
    /**
     * Authorizized with a new token or unauthorized request.
     */
    authLogin200ApplicationOctetStreamBinaryString?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
