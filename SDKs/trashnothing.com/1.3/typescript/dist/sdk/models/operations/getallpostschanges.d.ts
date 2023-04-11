import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllPostsChangesSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetAllPostsChangesRequest extends SpeakeasyBase {
    /**
     * Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
     *
     * @remarks
     *
     */
    dateMax: Date;
    /**
     * Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
     *
     * @remarks
     *
     */
    dateMin: Date;
    /**
     * The page of changes to return.
     */
    page?: number;
    /**
     * The number of changes to return per page (must be >= 1 and <= 50).
     */
    perPage?: number;
}
export declare class GetAllPostsChanges200ApplicationJSONChanges extends SpeakeasyBase {
    /**
     * The UTC date and time when the post was changed.
     */
    date?: Date;
    postId?: string;
    /**
     * The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired
     *
     * @remarks
     *
     */
    type?: string;
}
/**
 * The changes.
 */
export declare class GetAllPostsChanges200ApplicationJSON extends SpeakeasyBase {
    changes?: GetAllPostsChanges200ApplicationJSONChanges[];
}
export declare class GetAllPostsChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The changes.
     */
    getAllPostsChanges200ApplicationJSONObject?: GetAllPostsChanges200ApplicationJSON;
}
