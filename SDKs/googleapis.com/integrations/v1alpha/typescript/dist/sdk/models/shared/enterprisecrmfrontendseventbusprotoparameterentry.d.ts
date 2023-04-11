import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
/**
 * Explicitly getting the type of the parameter.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    StringValue = "STRING_VALUE",
    IntValue = "INT_VALUE",
    DoubleValue = "DOUBLE_VALUE",
    BooleanValue = "BOOLEAN_VALUE",
    ProtoValue = "PROTO_VALUE",
    SerializedObjectValue = "SERIALIZED_OBJECT_VALUE",
    StringArray = "STRING_ARRAY",
    IntArray = "INT_ARRAY",
    DoubleArray = "DOUBLE_ARRAY",
    ProtoArray = "PROTO_ARRAY",
    ProtoEnum = "PROTO_ENUM",
    BooleanArray = "BOOLEAN_ARRAY",
    ProtoEnumArray = "PROTO_ENUM_ARRAY",
    Bytes = "BYTES",
    BytesArray = "BYTES_ARRAY",
    NonSerializableObject = "NON_SERIALIZABLE_OBJECT",
    JsonValue = "JSON_VALUE"
}
/**
 * Key-value pair of EventBus parameters.
 */
export declare class EnterpriseCrmFrontendsEventbusProtoParameterEntry extends SpeakeasyBase {
    /**
     * Explicitly getting the type of the parameter.
     */
    dataType?: EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition.
     */
    key?: string;
    /**
     * To support various types of parameter values. Next available id: 14
     */
    value?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
}
