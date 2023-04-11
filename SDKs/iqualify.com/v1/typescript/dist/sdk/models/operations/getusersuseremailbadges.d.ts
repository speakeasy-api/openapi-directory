import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserEmailBadgesRequest extends SpeakeasyBase {
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetUsersUserEmailBadgesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user's badges
     */
    userBadges?: shared.UserBadge[];
}
