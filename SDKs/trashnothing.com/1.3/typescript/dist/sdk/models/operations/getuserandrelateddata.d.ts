import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserAndRelatedDataRequest extends SpeakeasyBase {
    /**
     * A user ID.
     */
    userId: string;
}
/**
 * The user and related data.
 */
export declare class GetUserAndRelatedData200ApplicationJSON extends SpeakeasyBase {
    /**
     * Feedback the current user has left on the user.
     */
    feedback?: shared.Feedback[];
    /**
     * Count of offer posts made by the user in the last 90 days.
     */
    offerCount?: number;
    /**
     * Other active posts from the user in the last 90 days. A maximum of 30 posts will be returned.
     *
     * @remarks
     *
     */
    posts?: shared.Post[];
    user?: shared.User;
    /**
     * Count of wanted posts made by the user in the last 90 days.
     */
    wantedCount?: number;
}
export declare class GetUserAndRelatedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user and related data.
     */
    getUserAndRelatedData200ApplicationJSONObject?: GetUserAndRelatedData200ApplicationJSON;
}
