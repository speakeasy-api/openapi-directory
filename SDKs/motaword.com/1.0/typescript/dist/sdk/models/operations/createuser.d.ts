import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateUserRequest extends SpeakeasyBase {
    user?: shared.User;
    /**
     * Send a welcome email to the user
     */
    notify?: boolean;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created user
     */
    user?: shared.User;
}
