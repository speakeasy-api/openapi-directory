import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User-defined labels (key-value pairs)
 */
export declare class PostServersIdActionsCreateImageCreateImageRequestLabels extends SpeakeasyBase {
    /**
     * New label
     */
    labelkey?: string;
}
/**
 * Type of Image to create (default: `snapshot`)
 */
export declare enum PostServersIdActionsCreateImageCreateImageRequestTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}
export declare class PostServersIdActionsCreateImageCreateImageRequest extends SpeakeasyBase {
    /**
     * Description of the Image, will be auto-generated if not set
     */
    description?: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: PostServersIdActionsCreateImageCreateImageRequestLabels;
    /**
     * Type of Image to create (default: `snapshot`)
     */
    type?: PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
}
export declare class PostServersIdActionsCreateImageRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsCreateImageCreateImageRequest;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsCreateImage201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsCreateImage201ApplicationJSONActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostServersIdActionsCreateImage201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsCreateImage201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsCreateImage201ApplicationJSONActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostServersIdActionsCreateImage201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsCreateImage201ApplicationJSONActionStatusEnum;
}
/**
 * Information about the Server the Image was created from
 */
export declare class PostServersIdActionsCreateImage201ApplicationJSONImageCreatedFrom extends SpeakeasyBase {
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
export declare enum PostServersIdActionsCreateImage201ApplicationJSONImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
 */
export declare class PostServersIdActionsCreateImage201ApplicationJSONImageProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export declare enum PostServersIdActionsCreateImage201ApplicationJSONImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
/**
 * Type of the Image
 */
export declare enum PostServersIdActionsCreateImage201ApplicationJSONImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PostServersIdActionsCreateImage201ApplicationJSONImage extends SpeakeasyBase {
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
    createdFrom: PostServersIdActionsCreateImage201ApplicationJSONImageCreatedFrom;
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
    osFlavor: PostServersIdActionsCreateImage201ApplicationJSONImageOsFlavorEnum;
    /**
     * Operating system version
     */
    osVersion: string;
    /**
     * Protection configuration for the Resource
     */
    protection: PostServersIdActionsCreateImage201ApplicationJSONImageProtection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapidDeploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: PostServersIdActionsCreateImage201ApplicationJSONImageStatusEnum;
    /**
     * Type of the Image
     */
    type: PostServersIdActionsCreateImage201ApplicationJSONImageTypeEnum;
}
/**
 * The `image` key in the reply contains an the created Image, which is an object with this structure
 *
 * @remarks
 *
 * The `action` key in the reply contains an Action object with this structure
 *
 */
export declare class PostServersIdActionsCreateImage201ApplicationJSON extends SpeakeasyBase {
    action?: PostServersIdActionsCreateImage201ApplicationJSONAction;
    image?: PostServersIdActionsCreateImage201ApplicationJSONImage;
}
export declare class PostServersIdActionsCreateImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `image` key in the reply contains an the created Image, which is an object with this structure
     *
     * @remarks
     *
     * The `action` key in the reply contains an Action object with this structure
     *
     */
    postServersIdActionsCreateImage201ApplicationJSONObject?: PostServersIdActionsCreateImage201ApplicationJSON;
}
