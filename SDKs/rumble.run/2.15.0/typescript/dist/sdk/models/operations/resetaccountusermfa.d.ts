import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetAccountUserMFASecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ResetAccountUserMFARequest extends SpeakeasyBase {
    /**
     * UUID of the user to retrieve
     */
    userId: string;
}
export declare class ResetAccountUserMFAResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
