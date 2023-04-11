import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAccountUserInviteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateAccountUserInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * key details
     */
    user?: shared.User;
}
