import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaUserEventInputConfigInput } from "./googlecloudretailv2alphausereventinputconfig";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudRetailV2alphaImportUserEventsRequestInput extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;
    /**
     * The input config source for user events.
     */
    inputConfig?: GoogleCloudRetailV2alphaUserEventInputConfigInput;
}
