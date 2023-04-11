import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * Type of the parameter.
 */
export declare enum GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum {
    IntegrationParameterDataTypeUnspecified = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED",
    StringValue = "STRING_VALUE",
    IntValue = "INT_VALUE",
    DoubleValue = "DOUBLE_VALUE",
    BooleanValue = "BOOLEAN_VALUE",
    StringArray = "STRING_ARRAY",
    IntArray = "INT_ARRAY",
    DoubleArray = "DOUBLE_ARRAY",
    BooleanArray = "BOOLEAN_ARRAY",
    JsonValue = "JSON_VALUE",
    ProtoValue = "PROTO_VALUE",
    ProtoArray = "PROTO_ARRAY"
}
/**
 * Specifies the input/output type for the parameter.
 */
export declare enum GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}
/**
 * Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
 */
export declare class GoogleCloudIntegrationsV1alphaIntegrationParameter extends SpeakeasyBase {
    /**
     * Type of the parameter.
     */
    dataType?: GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;
    /**
     * The type of the parameter.
     */
    defaultValue?: GoogleCloudIntegrationsV1alphaValueType;
    /**
     * The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName".
     */
    displayName?: string;
    /**
     * Specifies the input/output type for the parameter.
     */
    inputOutputType?: GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;
    /**
     * Whether this parameter is a transient parameter.
     */
    isTransient?: boolean;
    /**
     * This schema will be used to validate runtime JSON-typed values of this parameter.
     */
    jsonSchema?: string;
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string;
    /**
     * The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param.
     */
    producer?: string;
    /**
     * Searchable in the execution log or not.
     */
    searchable?: boolean;
}
