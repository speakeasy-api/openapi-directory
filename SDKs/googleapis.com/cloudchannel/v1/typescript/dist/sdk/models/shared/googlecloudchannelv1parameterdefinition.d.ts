import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
/**
 * Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.
 */
export declare enum GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Int64 = "INT64",
    String = "STRING",
    Double = "DOUBLE"
}
/**
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
 */
export declare class GoogleCloudChannelV1ParameterDefinition extends SpeakeasyBase {
    /**
     * If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type.
     */
    allowedValues?: GoogleCloudChannelV1Value[];
    /**
     * Data type and value of a parameter.
     */
    maxValue?: GoogleCloudChannelV1Value;
    /**
     * Data type and value of a parameter.
     */
    minValue?: GoogleCloudChannelV1Value;
    /**
     * Name of the parameter.
     */
    name?: string;
    /**
     * If set to true, parameter is optional to purchase this Offer.
     */
    optional?: boolean;
    /**
     * Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.
     */
    parameterType?: GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum;
}
