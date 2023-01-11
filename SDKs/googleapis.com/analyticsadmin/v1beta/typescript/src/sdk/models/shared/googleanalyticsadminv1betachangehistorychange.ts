import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1betachangehistorychangechangehistoryresource";


export enum GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}


// GoogleAnalyticsAdminV1betaChangeHistoryChange
/** 
 * A description of a change to a single Google Analytics resource.
**/
export class GoogleAnalyticsAdminV1betaChangeHistoryChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAfterChange" })
  resourceAfterChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;

  @SpeakeasyMetadata({ data: "json, name=resourceBeforeChange" })
  resourceBeforeChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
}
