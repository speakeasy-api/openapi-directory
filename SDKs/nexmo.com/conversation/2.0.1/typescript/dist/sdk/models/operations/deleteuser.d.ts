import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: string;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response with empty JSON
     */
    deleteUser200ApplicationJSONObject?: Record<string, any>;
}
