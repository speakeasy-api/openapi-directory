import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebProfiles extends SpeakeasyBase {
    /**
     * Timestamp of when the link was added to the profile.
     */
    createdAt?: string;
    /**
     * Id
     */
    id?: number;
    /**
     * Kind
     */
    kind?: string;
    /**
     * Service or platform
     */
    service?: string;
    /**
     * Link's title
     */
    title?: string;
    /**
     * URL of the external link
     */
    url?: string;
    /**
     * Username extracted from the external link
     */
    username?: string;
}
