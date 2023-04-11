import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryConfig } from "./enterprisecrmeventbusprotoparamspecentryconfig";
import { EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition } from "./enterprisecrmeventbusprotoparamspecentryprotodefinition";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRule } from "./enterprisecrmeventbusprotoparamspecentryvalidationrule";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
/**
 * The data type of the parameter.
 */
export declare enum EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum {
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
 * Key-value pair of EventBus task parameters. Next id: 13
 */
export declare class EnterpriseCrmFrontendsEventbusProtoParamSpecEntry extends SpeakeasyBase {
    /**
     * The FQCN of the Java object this represents. A string, for example, would be "java.lang.String". If this is "java.lang.Object", the parameter can be of any type.
     */
    className?: string;
    /**
     * If it is a collection of objects, this would be the FCQN of every individual element in the collection. If this is "java.lang.Object", the parameter is a collection of any type.
     */
    collectionElementClassName?: string;
    config?: EnterpriseCrmEventbusProtoParamSpecEntryConfig;
    /**
     * The data type of the parameter.
     */
    dataType?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
    /**
     * To support various types of parameter values. Next available id: 14
     */
    defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
    /**
     * If set, this entry is deprecated, so further use of this parameter should be prohibited.
     */
    isDeprecated?: boolean;
    isOutput?: boolean;
    /**
     * If the data_type is JSON_VALUE, then this will define its schema.
     */
    jsonSchema?: string;
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given task. These parameters must be predefined in the workflow definition.
     */
    key?: string;
    protoDef?: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;
    /**
     * If set, the user must provide an input value for this parameter.
     */
    required?: boolean;
    validationRule?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
}
