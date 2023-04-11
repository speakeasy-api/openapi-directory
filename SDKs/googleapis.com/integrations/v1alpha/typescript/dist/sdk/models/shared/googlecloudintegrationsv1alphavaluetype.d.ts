import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaBooleanParameterArray } from "./googlecloudintegrationsv1alphabooleanparameterarray";
import { GoogleCloudIntegrationsV1alphaDoubleParameterArray } from "./googlecloudintegrationsv1alphadoubleparameterarray";
import { GoogleCloudIntegrationsV1alphaIntParameterArray } from "./googlecloudintegrationsv1alphaintparameterarray";
import { GoogleCloudIntegrationsV1alphaStringParameterArray } from "./googlecloudintegrationsv1alphastringparameterarray";
/**
 * The type of the parameter.
 */
export declare class GoogleCloudIntegrationsV1alphaValueType extends SpeakeasyBase {
    /**
     * This message only contains a field of boolean array.
     */
    booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray;
    /**
     * Boolean.
     */
    booleanValue?: boolean;
    /**
     * This message only contains a field of double number array.
     */
    doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray;
    /**
     * Double Number.
     */
    doubleValue?: number;
    /**
     * This message only contains a field of integer array.
     */
    intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray;
    /**
     * Integer.
     */
    intValue?: string;
    /**
     * Json.
     */
    jsonValue?: string;
    /**
     * This message only contains a field of string array.
     */
    stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray;
    /**
     * String.
     */
    stringValue?: string;
}
