import { SpeakeasyBase } from "../../../internal/utils";
import { LicensingInformation } from "./licensinginformation";
import { Source } from "./source";
/**
 * This class defines an entitlement data on the Publish API
 */
export declare class Video extends SpeakeasyBase {
    /**
     * The url of the embeded video
     */
    embedUrl?: string;
    /**
     * This class defines an entitlement data on the Publish API
     */
    licensingInformation: LicensingInformation;
    /**
     * Source
     */
    source: Source;
    /**
     * The url of the video
     */
    url: string;
}
