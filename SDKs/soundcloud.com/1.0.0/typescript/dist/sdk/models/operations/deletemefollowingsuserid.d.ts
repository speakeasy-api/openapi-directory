import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class DeleteMeFollowingsUserIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud User id
     */
    userId: number;
}
export declare class DeleteMeFollowingsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
