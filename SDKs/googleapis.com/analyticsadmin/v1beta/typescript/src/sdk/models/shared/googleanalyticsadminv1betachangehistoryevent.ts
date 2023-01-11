import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChange } from "./googleanalyticsadminv1betachangehistorychange";


export enum GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum {
    ActorTypeUnspecified = "ACTOR_TYPE_UNSPECIFIED",
    User = "USER",
    System = "SYSTEM",
    Support = "SUPPORT"
}


// GoogleAnalyticsAdminV1betaChangeHistoryEvent
/** 
 * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
**/
export class GoogleAnalyticsAdminV1betaChangeHistoryEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actorType" })
  actorType?: GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=changeTime" })
  changeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=changes", elemType: GoogleAnalyticsAdminV1betaChangeHistoryChange })
  changes?: GoogleAnalyticsAdminV1betaChangeHistoryChange[];

  @SpeakeasyMetadata({ data: "json, name=changesFiltered" })
  changesFiltered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=userActorEmail" })
  userActorEmail?: string;
}
