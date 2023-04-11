import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
/**
 * The source syntax of this method.
 */
export declare enum MethodSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3",
    SyntaxEditions = "SYNTAX_EDITIONS"
}
/**
 * Method represents a method of an API interface.
 */
export declare class Method extends SpeakeasyBase {
    /**
     * The simple name of this method.
     */
    name?: string;
    /**
     * Any metadata attached to the method.
     */
    options?: Option[];
    /**
     * If true, the request is streamed.
     */
    requestStreaming?: boolean;
    /**
     * A URL of the input message type.
     */
    requestTypeUrl?: string;
    /**
     * If true, the response is streamed.
     */
    responseStreaming?: boolean;
    /**
     * The URL of the output message type.
     */
    responseTypeUrl?: string;
    /**
     * The source syntax of this method.
     */
    syntax?: MethodSyntaxEnum;
}
