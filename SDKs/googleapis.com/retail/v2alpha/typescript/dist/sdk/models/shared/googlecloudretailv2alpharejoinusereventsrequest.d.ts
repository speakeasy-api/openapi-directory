import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value.
 */
export declare enum GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}
/**
 * Request message for RejoinUserEvents method.
 */
export declare class GoogleCloudRetailV2alphaRejoinUserEventsRequest extends SpeakeasyBase {
    /**
     * The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value.
     */
    userEventRejoinScope?: GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum;
}
