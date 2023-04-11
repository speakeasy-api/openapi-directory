import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used.
 */
export declare enum GrpcRouteMethodMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}
/**
 * Specifies a match against a method.
 */
export declare class GrpcRouteMethodMatch extends SpeakeasyBase {
    /**
     * Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION.
     */
    caseSensitive?: boolean;
    /**
     * Required. Name of the method to match against. If unspecified, will match all methods.
     */
    grpcMethod?: string;
    /**
     * Required. Name of the service to match against. If unspecified, will match all services.
     */
    grpcService?: string;
    /**
     * Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used.
     */
    type?: GrpcRouteMethodMatchTypeEnum;
}
