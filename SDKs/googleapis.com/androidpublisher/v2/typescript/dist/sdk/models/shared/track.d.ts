import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Track extends SpeakeasyBase {
    /**
     * Identifier for this track.
     */
    track?: string;
    userFraction?: number;
    /**
     * Version codes to make active on this track. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases.
     */
    versionCodes?: number[];
}
