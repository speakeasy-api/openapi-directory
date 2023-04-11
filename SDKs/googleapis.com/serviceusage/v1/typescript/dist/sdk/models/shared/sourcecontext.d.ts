import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
 */
export declare class SourceContext extends SpeakeasyBase {
    /**
     * The path-qualified name of the .proto file that contained the associated protobuf element. For example: `"google/protobuf/source_context.proto"`.
     */
    fileName?: string;
}
