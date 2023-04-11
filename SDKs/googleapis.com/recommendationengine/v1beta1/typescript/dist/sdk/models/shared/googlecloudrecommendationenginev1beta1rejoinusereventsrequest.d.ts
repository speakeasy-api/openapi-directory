import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.
 */
export declare enum GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}
/**
 * Request message for CatalogRejoin method.
 */
export declare class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest extends SpeakeasyBase {
    /**
     * Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.
     */
    userEventRejoinScope?: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum;
}
