import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkSettings } from "./networksettings";
import { TrafficSplit } from "./trafficsplit";
/**
 * A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * Relative name of the service within the application. Example: default.@OutputOnly
     */
    id?: string;
    /**
     * A set of labels to apply to this service. Labels are key/value pairs that describe the service and all resources that belong to it (e.g., versions). The labels can be used to search and group resources, and are propagated to the usage and billing reports, enabling fine-grain analysis of costs. An example of using labels is to tag resources belonging to different environments (e.g., "env=prod", "env=qa"). Label keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, dashes, and international characters. Label keys must start with a lowercase letter or an international character. Each service can have at most 32 labels.
     */
    labels?: Record<string, string>;
    /**
     * Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly
     */
    name?: string;
    /**
     * A NetworkSettings resource is a container for ingress settings for a version or service.
     */
    networkSettings?: NetworkSettings;
    /**
     * Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
     */
    split?: TrafficSplit;
}
