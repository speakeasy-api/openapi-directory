import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
 */
export declare class Brand extends SpeakeasyBase {
    /**
     * Application name displayed on OAuth consent screen.
     */
    applicationTitle?: string;
    /**
     * Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created.
     */
    name?: string;
    /**
     * Output only. Whether the brand is only intended for usage inside the G Suite organization only.
     */
    orgInternalOnly?: boolean;
    /**
     * Support email displayed on the OAuth consent screen.
     */
    supportEmail?: string;
}
/**
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
 */
export declare class BrandInput extends SpeakeasyBase {
    /**
     * Application name displayed on OAuth consent screen.
     */
    applicationTitle?: string;
    /**
     * Support email displayed on the OAuth consent screen.
     */
    supportEmail?: string;
}
