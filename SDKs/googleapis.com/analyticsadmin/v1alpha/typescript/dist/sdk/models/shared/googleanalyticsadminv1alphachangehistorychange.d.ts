import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource } from "./googleanalyticsadminv1alphachangehistorychangechangehistoryresource";
/**
 * The type of action that changed this resource.
 */
export declare enum GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
/**
 * A description of a change to a single Google Analytics resource.
 */
export declare class GoogleAnalyticsAdminV1alphaChangeHistoryChange extends SpeakeasyBase {
    /**
     * The type of action that changed this resource.
     */
    action?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum;
    /**
     * Resource name of the resource whose changes are described by this entry.
     */
    resource?: string;
    /**
     * A snapshot of a resource as before or after the result of a change in change history.
     */
    resourceAfterChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
    /**
     * A snapshot of a resource as before or after the result of a change in change history.
     */
    resourceBeforeChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
}
