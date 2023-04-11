import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1betachangehistorychangechangehistoryresource";
/**
 * The type of action that changed this resource.
 */
export declare enum GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
/**
 * A description of a change to a single Google Analytics resource.
 */
export declare class GoogleAnalyticsAdminV1betaChangeHistoryChange extends SpeakeasyBase {
    /**
     * The type of action that changed this resource.
     */
    action?: GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum;
    /**
     * Resource name of the resource whose changes are described by this entry.
     */
    resource?: string;
    /**
     * A snapshot of a resource as before or after the result of a change in change history.
     */
    resourceAfterChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
    /**
     * A snapshot of a resource as before or after the result of a change in change history.
     */
    resourceBeforeChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
}
