import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeTypeLabelEntry } from "./compositetypelabelentry";
import { Operation } from "./operation";
import { TemplateContents } from "./templatecontents";
export declare enum CompositeTypeStatusEnum {
    UnknownStatus = "UNKNOWN_STATUS",
    Deprecated = "DEPRECATED",
    Experimental = "EXPERIMENTAL",
    Supported = "SUPPORTED"
}
/**
 * Holds the composite type.
 */
export declare class CompositeType extends SpeakeasyBase {
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string;
    id?: string;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string;
    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
     */
    labels?: CompositeTypeLabelEntry[];
    /**
     * Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.
     */
    name?: string;
    /**
     * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
     */
    operation?: Operation;
    /**
     * Output only. Server defined URL for the resource.
     */
    selfLink?: string;
    status?: CompositeTypeStatusEnum;
    /**
     * Files that make up the template contents of a template type.
     */
    templateContents?: TemplateContents;
}
