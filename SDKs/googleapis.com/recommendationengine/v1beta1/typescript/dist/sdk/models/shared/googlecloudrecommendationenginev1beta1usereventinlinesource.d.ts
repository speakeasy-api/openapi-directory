import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";
/**
 * The inline source for the input config for ImportUserEvents method.
 */
export declare class GoogleCloudRecommendationengineV1beta1UserEventInlineSource extends SpeakeasyBase {
    /**
     * Optional. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
