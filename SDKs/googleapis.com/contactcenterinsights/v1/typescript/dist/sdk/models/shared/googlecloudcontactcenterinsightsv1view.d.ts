import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The View resource.
 */
export declare class GoogleCloudContactcenterinsightsV1ViewInput extends SpeakeasyBase {
    /**
     * The human-readable display name of the view.
     */
    displayName?: string;
    /**
     * Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}
     */
    name?: string;
    /**
     * String with specific view properties, must be non-empty.
     */
    value?: string;
}
/**
 * The View resource.
 */
export declare class GoogleCloudContactcenterinsightsV1View extends SpeakeasyBase {
    /**
     * Output only. The time at which this view was created.
     */
    createTime?: string;
    /**
     * The human-readable display name of the view.
     */
    displayName?: string;
    /**
     * Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}
     */
    name?: string;
    /**
     * Output only. The most recent time at which the view was updated.
     */
    updateTime?: string;
    /**
     * String with specific view properties, must be non-empty.
     */
    value?: string;
}
