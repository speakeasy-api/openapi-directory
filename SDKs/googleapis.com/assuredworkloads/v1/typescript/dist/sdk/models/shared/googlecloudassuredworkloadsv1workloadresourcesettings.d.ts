import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the type of resource. This field should be specified to correspond the id to the right resource type (CONSUMER_FOLDER or ENCRYPTION_KEYS_PROJECT)
 */
export declare enum GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    ConsumerProject = "CONSUMER_PROJECT",
    ConsumerFolder = "CONSUMER_FOLDER",
    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT",
    Keyring = "KEYRING"
}
/**
 * Represent the custom settings for the resources to be created.
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadResourceSettings extends SpeakeasyBase {
    /**
     * User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
     */
    displayName?: string;
    /**
     * Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.
     */
    resourceId?: string;
    /**
     * Indicates the type of resource. This field should be specified to correspond the id to the right resource type (CONSUMER_FOLDER or ENCRYPTION_KEYS_PROJECT)
     */
    resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
}
