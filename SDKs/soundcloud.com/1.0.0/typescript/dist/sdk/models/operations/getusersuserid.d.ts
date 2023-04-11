import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetUsersUserIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class GetUsersUserIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    completeUser?: shared.CompleteUser;
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
