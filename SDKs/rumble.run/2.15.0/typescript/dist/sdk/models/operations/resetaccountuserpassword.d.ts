import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetAccountUserPasswordSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ResetAccountUserPasswordRequest extends SpeakeasyBase {
    /**
     * UUID of the user to retrieve
     */
    userId: string;
}
export declare class ResetAccountUserPasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
