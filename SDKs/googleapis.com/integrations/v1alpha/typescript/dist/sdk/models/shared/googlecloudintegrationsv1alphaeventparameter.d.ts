import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
 */
export declare class GoogleCloudIntegrationsV1alphaEventParameter extends SpeakeasyBase {
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string;
    /**
     * The type of the parameter.
     */
    value?: GoogleCloudIntegrationsV1alphaValueType;
}
