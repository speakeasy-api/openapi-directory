import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetAccountUserLockoutSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ResetAccountUserLockoutRequest extends SpeakeasyBase {
    /**
     * UUID of the user to retrieve
     */
    userId: string;
}
export declare class ResetAccountUserLockoutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
