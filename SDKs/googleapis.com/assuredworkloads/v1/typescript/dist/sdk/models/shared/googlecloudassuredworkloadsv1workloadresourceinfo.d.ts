import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the type of resource.
 */
export declare enum GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    ConsumerProject = "CONSUMER_PROJECT",
    ConsumerFolder = "CONSUMER_FOLDER",
    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT",
    Keyring = "KEYRING"
}
/**
 * Represent the resources that are children of this Workload.
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadResourceInfo extends SpeakeasyBase {
    /**
     * Resource identifier. For a project this represents project_number.
     */
    resourceId?: string;
    /**
     * Indicates the type of resource.
     */
    resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum;
}
