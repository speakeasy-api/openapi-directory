import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAccountUserRequest extends SpeakeasyBase {
    /**
     * user parameters
     */
    userOptions: shared.UserOptions;
    /**
     * UUID of the user to retrieve
     */
    userId: string;
}
export declare class UpdateAccountUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
