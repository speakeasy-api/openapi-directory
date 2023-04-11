import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Destination Image type to convert to
 */
export declare enum PutImagesIdUpdateImageRequestTypeEnum {
    Snapshot = "snapshot"
}
export declare class PutImagesIdUpdateImageRequest extends SpeakeasyBase {
    /**
     * New description of Image
     */
    description?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Destination Image type to convert to
     */
    type?: PutImagesIdUpdateImageRequestTypeEnum;
}
export declare class PutImagesIdRequest extends SpeakeasyBase {
    requestBody?: PutImagesIdUpdateImageRequest;
    /**
     * ID of the Image
     */
    id: number;
}
/**
 * Information about the Server the Image was created from
 */
export declare class PutImagesId200ApplicationJSONImageCreatedFrom extends SpeakeasyBase {
    /**
     * ID of the Server the Image was created from
     */
    id: number;
    /**
     * Server name at the time the Image was created
     */
    name: string;
}
/**
 * Flavor of operating system contained in the Image
 */
export declare enum PutImagesId200ApplicationJSONImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class PutImagesId200ApplicationJSONImageProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum PutImagesId200ApplicationJSONImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum PutImagesId200ApplicationJSONImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PutImagesId200ApplicationJSONImage extends SpeakeasyBase {
    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    boundTo: number;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Information about the Server the Image was created from
     */
    createdFrom: PutImagesId200ApplicationJSONImageCreatedFrom;
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: string;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    diskSize: number;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    imageSize: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: string;
    /**
     * Flavor of operating system contained in the Image
     */
    osFlavor: PutImagesId200ApplicationJSONImageOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: PutImagesId200ApplicationJSONImageProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: PutImagesId200ApplicationJSONImageStatusEnum;
    /**
     * Type of the Image
     */
    type: PutImagesId200ApplicationJSONImageTypeEnum;
}
/**
 * The image key in the reply contains the modified Image object
 */
export declare class PutImagesId200ApplicationJSON extends SpeakeasyBase {
    image?: PutImagesId200ApplicationJSONImage;
}
export declare class PutImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The image key in the reply contains the modified Image object
     */
    putImagesId200ApplicationJSONObject?: PutImagesId200ApplicationJSON;
}
