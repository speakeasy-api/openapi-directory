import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationEndpointGrpcSettings } from "./notificationendpointgrpcsettings";
/**
 * Represents a notification endpoint. A notification endpoint resource defines an endpoint to receive notifications when there are status changes detected by the associated health check service. For more information, see Health checks overview.
 */
export declare class NotificationEndpoint extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Represents a gRPC setting that describes one gRPC notification endpoint and the retry duration attempting to send notification to this endpoint.
     */
    grpcSettings?: NotificationEndpointGrpcSettings;
    /**
     * [Output Only] A unique identifier for this resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#notificationEndpoint for notification endpoints.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] URL of the region where the notification endpoint resides. This field applies only to the regional resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
}
