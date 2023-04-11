import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about CSS domain.
 */
export declare class Css extends SpeakeasyBase {
    /**
     * Output only. Immutable. The CSS domain ID.
     */
    cssDomainId?: string;
    /**
     * Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users.
     */
    cssGroupId?: string;
    /**
     * Output only. Immutable. The CSS domain's display name, used when space is constrained.
     */
    displayName?: string;
    /**
     * Output only. Immutable. The CSS domain's full name.
     */
    fullName?: string;
    /**
     * Output only. Immutable. The CSS domain's homepage.
     */
    homepageUri?: string;
    /**
     * A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users.
     */
    labelIds?: string[];
}
