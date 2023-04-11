import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
 */
export declare class LocationStateInput extends SpeakeasyBase {
    /**
     * Output only. Indicates whether the location can be deleted using the Google My Business API.
     */
    canDelete?: boolean;
    /**
     * Output only. Indicates whether the location can be updated.
     */
    canUpdate?: boolean;
    /**
     * Output only. Indicates whether any of this Location's properties are in the edit pending state.
     */
    hasPendingEdits?: boolean;
    /**
     * Output only. Indicates whether the location has pending verification requests.
     */
    hasPendingVerification?: boolean;
    /**
     * Output only. Indicates whether the location is disabled.
     */
    isDisabled?: boolean;
    /**
     * Output only. Indicates whether the location is disconnected from a place on Google Maps.
     */
    isDisconnected?: boolean;
    /**
     * Output only. Indicates whether the location is a duplicate of another location.
     */
    isDuplicate?: boolean;
    /**
     * Output only. Indicates whether the place ID associated with this location has updates.
     */
    isGoogleUpdated?: boolean;
    /**
     * Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location.
     */
    isLocalPostApiDisabled?: boolean;
    /**
     * Output only. Indicates whether the review of the location is pending.
     */
    isPendingReview?: boolean;
    /**
     * Output only. Indicates whether the location is published.
     */
    isPublished?: boolean;
    /**
     * Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145).
     */
    isSuspended?: boolean;
    /**
     * Output only. Indicates whether the location is verified.
     */
    isVerified?: boolean;
    /**
     * Output only. Indicates whether the location requires reverification.
     */
    needsReverification?: boolean;
}
/**
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
 */
export declare class LocationState extends SpeakeasyBase {
    /**
     * Output only. Indicates whether the location can be deleted using the Google My Business API.
     */
    canDelete?: boolean;
    /**
     * Output only. Indicates if the listing is eligible for food menu.
     */
    canHaveFoodMenus?: boolean;
    /**
     * Output only. Indicates if the listing can modify a ServiceList.
     */
    canModifyServiceList?: boolean;
    /**
     * Output only. Indicates whether the location can operate on Health data.
     */
    canOperateHealthData?: boolean;
    /**
     * Output only. Indicates whether the location can operate on Lodging data.
     */
    canOperateLodgingData?: boolean;
    /**
     * Output only. Indicates whether the location can be updated.
     */
    canUpdate?: boolean;
    /**
     * Output only. Indicates whether any of this Location's properties are in the edit pending state.
     */
    hasPendingEdits?: boolean;
    /**
     * Output only. Indicates whether the location has pending verification requests.
     */
    hasPendingVerification?: boolean;
    /**
     * Output only. Indicates whether the location is disabled.
     */
    isDisabled?: boolean;
    /**
     * Output only. Indicates whether the location is disconnected from a place on Google Maps.
     */
    isDisconnected?: boolean;
    /**
     * Output only. Indicates whether the location is a duplicate of another location.
     */
    isDuplicate?: boolean;
    /**
     * Output only. Indicates whether the place ID associated with this location has updates.
     */
    isGoogleUpdated?: boolean;
    /**
     * Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location.
     */
    isLocalPostApiDisabled?: boolean;
    /**
     * Output only. Indicates whether the review of the location is pending.
     */
    isPendingReview?: boolean;
    /**
     * Output only. Indicates whether the location is published.
     */
    isPublished?: boolean;
    /**
     * Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145).
     */
    isSuspended?: boolean;
    /**
     * Output only. Indicates whether the location is verified.
     */
    isVerified?: boolean;
    /**
     * Output only. Indicates whether the location requires reverification.
     */
    needsReverification?: boolean;
}
