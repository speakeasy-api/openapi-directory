import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChange } from "./googleanalyticsadminv1betachangehistorychange";
/**
 * The type of actor that made this change.
 */
export declare enum GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum {
    ActorTypeUnspecified = "ACTOR_TYPE_UNSPECIFIED",
    User = "USER",
    System = "SYSTEM",
    Support = "SUPPORT"
}
/**
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
 */
export declare class GoogleAnalyticsAdminV1betaChangeHistoryEvent extends SpeakeasyBase {
    /**
     * The type of actor that made this change.
     */
    actorType?: GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum;
    /**
     * Time when change was made.
     */
    changeTime?: string;
    /**
     * A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.
     */
    changes?: GoogleAnalyticsAdminV1betaChangeHistoryChange[];
    /**
     * If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.
     */
    changesFiltered?: boolean;
    /**
     * ID of this change history event. This ID is unique across Google Analytics.
     */
    id?: string;
    /**
     * Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.
     */
    userActorEmail?: string;
}
