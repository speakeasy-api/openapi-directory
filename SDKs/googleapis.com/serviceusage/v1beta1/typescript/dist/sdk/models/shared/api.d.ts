import { SpeakeasyBase } from "../../../internal/utils";
import { Method } from "./method";
import { Mixin } from "./mixin";
import { Option } from "./option";
import { SourceContext } from "./sourcecontext";
/**
 * The source syntax of the service.
 */
export declare enum ApiSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3",
    SyntaxEditions = "SYNTAX_EDITIONS"
}
/**
 * Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
 */
export declare class Api extends SpeakeasyBase {
    /**
     * The methods of this interface, in unspecified order.
     */
    methods?: Method[];
    /**
     * Included interfaces. See Mixin.
     */
    mixins?: Mixin[];
    /**
     * The fully qualified name of this interface, including package name followed by the interface's simple name.
     */
    name?: string;
    /**
     * Any metadata attached to the interface.
     */
    options?: Option[];
    /**
     * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
     */
    sourceContext?: SourceContext;
    /**
     * The source syntax of the service.
     */
    syntax?: ApiSyntaxEnum;
    /**
     * A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in `v`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
     */
    version?: string;
}
