import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * Optional. Annotations for the service. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Annotations that fails to meet these requirements are rejected Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Endpoints associated with this service. Returned on LookupService.ResolveService. Control plane clients should use RegistrationService.ListEndpoints.
     */
    endpoints?: Endpoint[];
    /**
     * Immutable. The resource name for the service in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    name?: string;
    /**
     * Output only. The globally unique identifier of the service in the UUID4 format.
     */
    uid?: string;
}
/**
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * Optional. Annotations for the service. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Annotations that fails to meet these requirements are rejected Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory.
     */
    annotations?: Record<string, string>;
    /**
     * Immutable. The resource name for the service in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    name?: string;
}
