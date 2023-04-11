import { SpeakeasyBase } from "../../../internal/utils";
import { CloseApproachData } from "./closeapproachdata";
import { EstimatedDiameterContainer } from "./estimateddiametercontainer";
import { OrbitalData } from "./orbitaldata";
/**
 * OK
 */
export declare class NearEarthObject extends SpeakeasyBase {
    /**
     * Is a measure of an asteroids brightness
     */
    absoluteMagnitudeH?: number;
    /**
     * Close approach information of the Asteroid
     */
    closeApproachData?: CloseApproachData[];
    designation?: string;
    estimatedDiameter?: EstimatedDiameterContainer;
    isPotentiallyHazardousAsteroid?: boolean;
    isSentryObject?: boolean;
    name?: string;
    nameLimited?: string;
    /**
     * A Link to the NASA JPL Small-Body Database website
     */
    nasaJplUrl?: string;
    /**
     * The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data
     */
    neoReferenceId?: string;
    orbitalData?: OrbitalData;
    sentryData?: string;
}
