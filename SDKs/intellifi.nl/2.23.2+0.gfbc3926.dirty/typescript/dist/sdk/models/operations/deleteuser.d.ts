import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUserSecurity extends SpeakeasyBase {
    cookieSid: string;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the deleted resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
