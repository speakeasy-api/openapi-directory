import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Asset size to download
 */
export declare enum LicenseEditorialContentSizeEnum {
    Small = "small",
    Medium = "medium",
    Original = "original"
}
/**
 * Individual editorial content to license
 */
export declare class LicenseEditorialContent extends SpeakeasyBase {
    /**
     * Editorial ID
     */
    editorialId: string;
    /**
     * License agreement to use for licensing
     */
    license: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     */
    metadata?: Record<string, any>;
    /**
     * Asset size to download
     */
    size?: LicenseEditorialContentSizeEnum;
}
