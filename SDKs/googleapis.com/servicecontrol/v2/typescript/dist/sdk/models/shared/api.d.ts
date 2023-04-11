import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
 */
export declare class Api extends SpeakeasyBase {
    /**
     * The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet".
     */
    operation?: string;
    /**
     * The API protocol used for sending the request, such as "http", "https", "grpc", or "internal".
     */
    protocol?: string;
    /**
     * The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request.
     */
    service?: string;
    /**
     * The API version associated with the API operation above, such as "v1" or "v1alpha1".
     */
    version?: string;
}
