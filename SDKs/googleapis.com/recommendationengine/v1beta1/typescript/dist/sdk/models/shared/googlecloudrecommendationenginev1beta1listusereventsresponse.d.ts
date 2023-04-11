import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";
/**
 * Response message for ListUserEvents method.
 */
export declare class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse extends SpeakeasyBase {
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token.
     */
    nextPageToken?: string;
    /**
     * The user events.
     */
    userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
