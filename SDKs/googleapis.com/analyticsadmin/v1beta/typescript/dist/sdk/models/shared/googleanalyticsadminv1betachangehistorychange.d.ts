import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1betachangehistorychangechangehistoryresource";
export declare enum GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
/**
 * A description of a change to a single Google Analytics resource.
**/
export declare class GoogleAnalyticsAdminV1betaChangeHistoryChange extends SpeakeasyBase {
    action?: GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum;
    resource?: string;
    resourceAfterChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
    resourceBeforeChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
}
