import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used.
 */
export declare enum GrpcRouteHeaderMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}
/**
 * A match against a collection of headers.
 */
export declare class GrpcRouteHeaderMatch extends SpeakeasyBase {
    /**
     * Required. The key of the header.
     */
    key?: string;
    /**
     * Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used.
     */
    type?: GrpcRouteHeaderMatchTypeEnum;
    /**
     * Required. The value of the header.
     */
    value?: string;
}
