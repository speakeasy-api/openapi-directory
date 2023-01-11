import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChange } from "./googleanalyticsadminv1betachangehistorychange";
export declare enum GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum {
    ActorTypeUnspecified = "ACTOR_TYPE_UNSPECIFIED",
    User = "USER",
    System = "SYSTEM",
    Support = "SUPPORT"
}
/**
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
**/
export declare class GoogleAnalyticsAdminV1betaChangeHistoryEvent extends SpeakeasyBase {
    actorType?: GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum;
    changeTime?: string;
    changes?: GoogleAnalyticsAdminV1betaChangeHistoryChange[];
    changesFiltered?: boolean;
    id?: string;
    userActorEmail?: string;
}
