import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountUserRequest extends SpeakeasyBase {
    /**
     * UUID of the user to retrieve
     */
    userId: string;
}
export declare class GetAccountUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
