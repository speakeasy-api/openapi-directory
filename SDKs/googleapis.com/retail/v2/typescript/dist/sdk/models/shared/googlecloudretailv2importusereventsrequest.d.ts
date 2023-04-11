import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ImportErrorsConfig } from "./googlecloudretailv2importerrorsconfig";
import { GoogleCloudRetailV2UserEventInputConfigInput } from "./googlecloudretailv2usereventinputconfig";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudRetailV2ImportUserEventsRequestInput extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;
    /**
     * The input config source for user events.
     */
    inputConfig?: GoogleCloudRetailV2UserEventInputConfigInput;
}
