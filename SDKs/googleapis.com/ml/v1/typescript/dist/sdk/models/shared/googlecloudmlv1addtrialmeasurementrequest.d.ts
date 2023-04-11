import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
/**
 * The request message for the AddTrialMeasurement service method.
 */
export declare class GoogleCloudMlV1AddTrialMeasurementRequest extends SpeakeasyBase {
    /**
     * A message representing a measurement.
     */
    measurement?: GoogleCloudMlV1Measurement;
}
