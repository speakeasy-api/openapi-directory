import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { InstanceProperties } from "./instanceproperties";
import { SavedDisk } from "./saveddisk";
import { SourceDiskEncryptionKey } from "./sourcediskencryptionkey";
import { SourceInstanceProperties } from "./sourceinstanceproperties";
/**
 * [Output Only] The status of the machine image. One of the following values: INVALID, CREATING, READY, DELETING, and UPLOADING.
 */
export declare enum MachineImageStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Invalid = "INVALID",
    Ready = "READY",
    Uploading = "UPLOADING"
}
/**
 * Represents a machine image resource. A machine image is a Compute Engine resource that stores all the configuration, metadata, permissions, and data from one or more disks required to create a Virtual machine (VM) instance. For more information, see Machine images.
 */
export declare class MachineImage extends SpeakeasyBase {
    /**
     * [Output Only] The creation timestamp for this machine image in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Input Only] Whether to attempt an application consistent machine image by informing the OS to prepare for the snapshot process.
     */
    guestFlush?: boolean;
    /**
     * [Output Only] A unique identifier for this machine image. The server defines this identifier.
     */
    id?: string;
    instanceProperties?: InstanceProperties;
    /**
     * [Output Only] The resource type, which is always compute#machineImage for machine image.
     */
    kind?: string;
    machineImageEncryptionKey?: CustomerEncryptionKey;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * An array of Machine Image specific properties for disks attached to the source instance
     */
    savedDisks?: SavedDisk[];
    /**
     * [Output Only] The URL for this machine image. The server defines this URL.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Input Only] The customer-supplied encryption key of the disks attached to the source instance. Required if the source disk is protected by a customer-supplied encryption key.
     */
    sourceDiskEncryptionKeys?: SourceDiskEncryptionKey[];
    /**
     * The source instance used to create the machine image. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instances/instance - projects/project/zones/zone/instances/instance
     */
    sourceInstance?: string;
    /**
     * DEPRECATED: Please use compute#instanceProperties instead. New properties will not be added to this field.
     */
    sourceInstanceProperties?: SourceInstanceProperties;
    /**
     * [Output Only] The status of the machine image. One of the following values: INVALID, CREATING, READY, DELETING, and UPLOADING.
     */
    status?: MachineImageStatusEnum;
    /**
     * The regional or multi-regional Cloud Storage bucket location where the machine image is stored.
     */
    storageLocations?: string[];
    /**
     * [Output Only] Total size of the storage used by the machine image.
     */
    totalStorageBytes?: string;
}
