import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaParameterMapEntry } from "./googlecloudintegrationsv1alphaparametermapentry";
/**
 * Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this.
 */
export declare enum GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum {
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
 * Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this.
 */
export declare enum GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum {
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
 * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
 */
export declare class GoogleCloudIntegrationsV1alphaParameterMap extends SpeakeasyBase {
    /**
     * A list of parameter map entries.
     */
    entries?: GoogleCloudIntegrationsV1alphaParameterMapEntry[];
    /**
     * Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this.
     */
    keyType?: GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum;
    /**
     * Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this.
     */
    valueType?: GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum;
}
