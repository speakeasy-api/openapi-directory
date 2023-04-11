import { SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
import { CompanionClickThroughOverride } from "./companionclickthroughoverride";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { DimensionValue } from "./dimensionvalue";
import { RichMediaExitOverride } from "./richmediaexitoverride";
/**
 * Creative Assignment.
 */
export declare class CreativeAssignment extends SpeakeasyBase {
    /**
     * Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
     */
    active?: boolean;
    /**
     * Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
     */
    applyEventTags?: boolean;
    /**
     * Click-through URL
     */
    clickThroughUrl?: ClickThroughUrl;
    /**
     * Companion creative overrides for this creative assignment. Applicable to video ads.
     */
    companionCreativeOverrides?: CompanionClickThroughOverride[];
    /**
     * Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
     */
    creativeGroupAssignments?: CreativeGroupAssignment[];
    /**
     * ID of the creative to be assigned. This is a required field.
     */
    creativeId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    creativeIdDimensionValue?: DimensionValue;
    endTime?: Date;
    /**
     * Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR
     */
    richMediaExitOverrides?: RichMediaExitOverride[];
    /**
     * Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive.
     */
    sequence?: number;
    /**
     * Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;
    startTime?: Date;
    /**
     * Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.
     */
    weight?: number;
}
