import { SpeakeasyBase } from "../../../internal/utils";
import { FlightWithEmissions } from "./flightwithemissions";
import { ModelVersion } from "./modelversion";
/**
 * Output definition for the ComputeFlightEmissions response.
 */
export declare class ComputeFlightEmissionsResponse extends SpeakeasyBase {
    /**
     * List of flight legs with emission estimates.
     */
    flightEmissions?: FlightWithEmissions[];
    /**
     * Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
     */
    modelVersion?: ModelVersion;
}
