import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
/**
 * The source syntax.
 */
export declare enum TypeSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3",
    SyntaxEditions = "SYNTAX_EDITIONS"
}
/**
 * A protocol buffer message type.
 */
export declare class TypeT extends SpeakeasyBase {
    /**
     * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
     */
    edition?: string;
    /**
     * The list of fields.
     */
    fields?: Field[];
    /**
     * The fully qualified message name.
     */
    name?: string;
    /**
     * The list of types appearing in `oneof` definitions in this type.
     */
    oneofs?: string[];
    /**
     * The protocol buffer options.
     */
    options?: Option[];
    /**
     * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
     */
    sourceContext?: SourceContext;
    /**
     * The source syntax.
     */
    syntax?: TypeSyntaxEnum;
}
