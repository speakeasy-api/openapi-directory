import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an appliance version.
 */
export declare class ApplianceVersion extends SpeakeasyBase {
    /**
     * Determine whether it's critical to upgrade the appliance to this version.
     */
    critical?: boolean;
    /**
     * Link to a page that contains the version release notes.
     */
    releaseNotesUri?: string;
    /**
     * A link for downloading the version.
     */
    uri?: string;
    /**
     * The appliance version.
     */
    version?: string;
}
