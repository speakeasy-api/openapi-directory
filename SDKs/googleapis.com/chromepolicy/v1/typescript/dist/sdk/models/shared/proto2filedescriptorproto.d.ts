import { SpeakeasyBase } from "../../../internal/utils";
import { Proto2DescriptorProto } from "./proto2descriptorproto";
import { Proto2EnumDescriptorProto } from "./proto2enumdescriptorproto";
/**
 * Describes a complete .proto file.
 */
export declare class Proto2FileDescriptorProto extends SpeakeasyBase {
    enumType?: Proto2EnumDescriptorProto[];
    /**
     * All top-level definitions in this file.
     */
    messageType?: Proto2DescriptorProto[];
    /**
     * file name, relative to root of source tree
     */
    name?: string;
    /**
     * e.g. "foo", "foo.bar", etc.
     */
    package?: string;
    /**
     * The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions".
     */
    syntax?: string;
}
