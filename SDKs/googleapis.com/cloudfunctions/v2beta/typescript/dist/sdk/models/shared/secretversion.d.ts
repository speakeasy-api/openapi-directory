import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a single version.
 */
export declare class SecretVersion extends SpeakeasyBase {
    /**
     * Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as '/etc/secrets' and path as `secret_foo` would mount the secret value file at `/etc/secrets/secret_foo`.
     */
    path?: string;
    /**
     * Version of the secret (version number or the string 'latest'). It is preferable to use `latest` version with secret volumes as secret value changes are reflected immediately.
     */
    version?: string;
}
