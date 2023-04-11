import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssetUrls extends SpeakeasyBase {
    /**
     * URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.
     */
    descriptive?: string;
    /**
     * URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.
     */
    standard?: string;
}
