import { SpeakeasyBase } from "../../../internal/utils";
import { BulkInsertInstanceResourcePerInstanceProperties } from "./bulkinsertinstanceresourceperinstanceproperties";
import { Instance } from "./instance";
import { InstanceProperties } from "./instanceproperties";
import { LocationPolicy } from "./locationpolicy";
/**
 * A transient resource used in compute.instances.bulkInsert and compute.regionInstances.bulkInsert . This resource is not persisted anywhere, it is used only for processing the requests.
 */
export declare class BulkInsertInstanceResource extends SpeakeasyBase {
    /**
     * The maximum number of instances to create.
     */
    count?: string;
    /**
     * Represents an Instance resource. An instance is a virtual machine that is hosted on Google Cloud Platform. For more information, read Virtual Machine Instances.
     */
    instance?: Instance;
    instanceProperties?: InstanceProperties;
    /**
     * Configuration for location policy among multiple possible locations (e.g. preferences for zone selection among zones in a single region).
     */
    locationPolicy?: LocationPolicy;
    /**
     * The minimum number of instances to create. If no min_count is specified then count is used as the default value. If min_count instances cannot be created, then no instances will be created and instances already created will be deleted.
     */
    minCount?: string;
    /**
     * The string pattern used for the names of the VMs. Either name_pattern or per_instance_properties must be set. The pattern must contain one continuous sequence of placeholder hash characters (#) with each character corresponding to one digit of the generated instance name. Example: a name_pattern of inst-#### generates instance names such as inst-0001 and inst-0002. If existing instances in the same project and zone have names that match the name pattern then the generated instance numbers start after the biggest existing number. For example, if there exists an instance with name inst-0050, then instance names generated using the pattern inst-#### begin with inst-0051. The name pattern placeholder #...# can contain up to 18 characters.
     */
    namePattern?: string;
    /**
     * Per-instance properties to be set on individual instances. Keys of this map specify requested instance names. Can be empty if name_pattern is used.
     */
    perInstanceProperties?: Record<string, BulkInsertInstanceResourcePerInstanceProperties>;
    /**
     * Specifies the instance template from which to create instances. You may combine sourceInstanceTemplate with instanceProperties to override specific values from an existing instance template. Bulk API follows the semantics of JSON Merge Patch described by RFC 7396. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - https://www.googleapis.com/compute/v1/projects/project /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate This field is optional.
     */
    sourceInstanceTemplate?: string;
}
