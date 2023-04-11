import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaUserEventInputConfigInput } from "./googlecloudretailv2betausereventinputconfig";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudRetailV2betaImportUserEventsRequestInput extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;
    /**
     * The input config source for user events.
     */
    inputConfig?: GoogleCloudRetailV2betaUserEventInputConfigInput;
}
