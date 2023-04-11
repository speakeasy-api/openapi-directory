import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileSummary } from "./profilesummary";
/**
 * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
 */
export declare class WebPropertySummary extends SpeakeasyBase {
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for Analytics WebPropertySummary.
     */
    kind?: string;
    /**
     * Level for this web property. Possible values are STANDARD or PREMIUM.
     */
    level?: string;
    /**
     * Web property name.
     */
    name?: string;
    /**
     * List of profiles under this web property.
     */
    profiles?: ProfileSummary[];
    /**
     * Indicates whether this web property is starred or not.
     */
    starred?: boolean;
    /**
     * Website url for this web property.
     */
    websiteUrl?: string;
}
