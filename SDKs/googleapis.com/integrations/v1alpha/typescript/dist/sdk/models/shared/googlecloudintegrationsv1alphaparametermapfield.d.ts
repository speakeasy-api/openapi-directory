import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * Field represents either the key or value in an entry.
 */
export declare class GoogleCloudIntegrationsV1alphaParameterMapField extends SpeakeasyBase {
    /**
     * The type of the parameter.
     */
    literalValue?: GoogleCloudIntegrationsV1alphaValueType;
    /**
     * Referencing one of the Integration variables.
     */
    referenceKey?: string;
}
