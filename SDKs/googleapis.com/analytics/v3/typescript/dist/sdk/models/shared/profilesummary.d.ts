import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
 */
export declare class ProfileSummary extends SpeakeasyBase {
    /**
     * View (profile) ID.
     */
    id?: string;
    /**
     * Resource type for Analytics ProfileSummary.
     */
    kind?: string;
    /**
     * View (profile) name.
     */
    name?: string;
    /**
     * Indicates whether this view (profile) is starred or not.
     */
    starred?: boolean;
    /**
     * View (Profile) type. Supported types: WEB or APP.
     */
    type?: string;
}
