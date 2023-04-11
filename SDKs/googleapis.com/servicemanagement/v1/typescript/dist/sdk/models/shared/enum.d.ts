import { SpeakeasyBase } from "../../../internal/utils";
import { EnumValue } from "./enumvalue";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
/**
 * The source syntax.
 */
export declare enum EnumSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3",
    SyntaxEditions = "SYNTAX_EDITIONS"
}
/**
 * Enum type definition.
 */
export declare class Enum extends SpeakeasyBase {
    /**
     * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
     */
    edition?: string;
    /**
     * Enum value definitions.
     */
    enumvalue?: EnumValue[];
    /**
     * Enum type name.
     */
    name?: string;
    /**
     * Protocol buffer options.
     */
    options?: Option[];
    /**
     * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
     */
    sourceContext?: SourceContext;
    /**
     * The source syntax.
     */
    syntax?: EnumSyntaxEnum;
}
