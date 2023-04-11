import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoAttributes } from "./enterprisecrmeventbusprotoattributes";
import { EnterpriseCrmEventbusProtoNodeIdentifier } from "./enterprisecrmeventbusprotonodeidentifier";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
/**
 * The data type of the parameter.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum {
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
 * Specifies the input/output type for the parameter.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}
export declare class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry extends SpeakeasyBase {
    /**
     * Attributes are additional options that can be associated with each event property. For more information, see
     */
    attributes?: EnterpriseCrmEventbusProtoAttributes;
    /**
     * Child parameters nested within this parameter. This field only applies to protobuf parameters
     */
    children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[];
    /**
     * The data type of the parameter.
     */
    dataType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
    /**
     * To support various types of parameter values. Next available id: 14
     */
    defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
    /**
     * Specifies the input/output type for the parameter.
     */
    inOutType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
    /**
     * Whether this parameter is a transient parameter.
     */
    isTransient?: boolean;
    /**
     * This schema will be used to validate runtime JSON-typed values of this parameter.
     */
    jsonSchema?: string;
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition.
     */
    key?: string;
    /**
     * The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName".
     */
    name?: string;
    /**
     * Represents a node identifier (type + id). Next highest id: 3
     */
    producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier;
    producer?: string;
    /**
     * The name of the protobuf type if the parameter has a protobuf data type.
     */
    protoDefName?: string;
    /**
     * If the data type is of type proto or proto array, this field needs to be populated with the fully qualified proto name. This message, for example, would be "enterprise.crm.frontends.eventbus.proto.WorkflowParameterEntry".
     */
    protoDefPath?: string;
}
