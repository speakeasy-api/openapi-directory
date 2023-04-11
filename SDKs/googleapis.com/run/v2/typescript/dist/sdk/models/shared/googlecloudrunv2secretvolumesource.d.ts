import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2VersionToPath } from "./googlecloudrunv2versiontopath";
/**
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
 */
export declare class GoogleCloudRunV2SecretVolumeSource extends SpeakeasyBase {
    /**
     * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set.
     */
    defaultMode?: number;
    /**
     * If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.
     */
    items?: GoogleCloudRunV2VersionToPath[];
    /**
     * Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
     */
    secret?: string;
}
