import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUserSecurity extends SpeakeasyBase {
    cookieSid: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    /**
     * A JSON object containing user information
     */
    userInput: shared.UserInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
