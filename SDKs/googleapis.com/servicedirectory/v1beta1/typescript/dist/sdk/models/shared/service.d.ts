import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the service was created.
     */
    createTime?: string;
    /**
     * Output only. Endpoints associated with this service. Returned on LookupService.ResolveService. Control plane clients should use RegistrationService.ListEndpoints.
     */
    endpoints?: Endpoint[];
    /**
     * Optional. Metadata for the service. This data can be consumed by service clients. Restrictions: * The entire metadata dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Metadata that goes beyond this limit are rejected * Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements are rejected Note: This field is equivalent to the `annotations` field in the v1 API. They have the same syntax and read/write to the same location in Service Directory.
     */
    metadata?: Record<string, string>;
    /**
     * Immutable. The resource name for the service in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    name?: string;
    /**
     * Output only. A globally unique identifier (in UUID4 format) for this service.
     */
    uid?: string;
    /**
     * Output only. The timestamp when the service was last updated. Note: endpoints being created/deleted/updated within the service are not considered service updates for the purpose of this timestamp.
     */
    updateTime?: string;
}
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * Optional. Metadata for the service. This data can be consumed by service clients. Restrictions: * The entire metadata dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Metadata that goes beyond this limit are rejected * Valid metadata keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Metadata that fails to meet these requirements are rejected Note: This field is equivalent to the `annotations` field in the v1 API. They have the same syntax and read/write to the same location in Service Directory.
     */
    metadata?: Record<string, string>;
    /**
     * Immutable. The resource name for the service in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    name?: string;
}
