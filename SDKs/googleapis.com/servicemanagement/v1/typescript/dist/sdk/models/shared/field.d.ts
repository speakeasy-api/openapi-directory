import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
/**
 * The field cardinality.
 */
export declare enum FieldCardinalityEnum {
    CardinalityUnknown = "CARDINALITY_UNKNOWN",
    CardinalityOptional = "CARDINALITY_OPTIONAL",
    CardinalityRequired = "CARDINALITY_REQUIRED",
    CardinalityRepeated = "CARDINALITY_REPEATED"
}
/**
 * The field type.
 */
export declare enum FieldKindEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    TypeDouble = "TYPE_DOUBLE",
    TypeFloat = "TYPE_FLOAT",
    TypeInt64 = "TYPE_INT64",
    TypeUint64 = "TYPE_UINT64",
    TypeInt32 = "TYPE_INT32",
    TypeFixed64 = "TYPE_FIXED64",
    TypeFixed32 = "TYPE_FIXED32",
    TypeBool = "TYPE_BOOL",
    TypeString = "TYPE_STRING",
    TypeGroup = "TYPE_GROUP",
    TypeMessage = "TYPE_MESSAGE",
    TypeBytes = "TYPE_BYTES",
    TypeUint32 = "TYPE_UINT32",
    TypeEnum = "TYPE_ENUM",
    TypeSfixed32 = "TYPE_SFIXED32",
    TypeSfixed64 = "TYPE_SFIXED64",
    TypeSint32 = "TYPE_SINT32",
    TypeSint64 = "TYPE_SINT64"
}
/**
 * A single field of a message type.
 */
export declare class Field extends SpeakeasyBase {
    /**
     * The field cardinality.
     */
    cardinality?: FieldCardinalityEnum;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string;
    /**
     * The field JSON name.
     */
    jsonName?: string;
    /**
     * The field type.
     */
    kind?: FieldKindEnum;
    /**
     * The field name.
     */
    name?: string;
    /**
     * The field number.
     */
    number?: number;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number;
    /**
     * The protocol buffer options.
     */
    options?: Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean;
    /**
     * The field type URL, without the scheme, for message or enumeration types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
     */
    typeUrl?: string;
}
