import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountUserSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountUserRequest extends SpeakeasyBase {
    /**
     * UUID of the user to delete
     */
    userId: string;
}
export declare class RemoveAccountUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
