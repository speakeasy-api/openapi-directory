import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
 */
export declare class Option extends SpeakeasyBase {
    /**
     * The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `"map_entry"`. For custom options, it should be the fully-qualified name. For example, `"google.api.http"`.
     */
    name?: string;
    /**
     * The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
     */
    value?: Record<string, any>;
}
