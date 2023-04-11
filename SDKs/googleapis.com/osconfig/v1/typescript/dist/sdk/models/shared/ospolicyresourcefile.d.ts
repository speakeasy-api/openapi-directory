import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFileGcs } from "./ospolicyresourcefilegcs";
import { OSPolicyResourceFileRemote } from "./ospolicyresourcefileremote";
/**
 * A remote or local file.
 */
export declare class OSPolicyResourceFile extends SpeakeasyBase {
    /**
     * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
     */
    allowInsecure?: boolean;
    /**
     * Specifies a file available as a Cloud Storage Object.
     */
    gcs?: OSPolicyResourceFileGcs;
    /**
     * A local path within the VM to use.
     */
    localPath?: string;
    /**
     * Specifies a file available via some URI.
     */
    remote?: OSPolicyResourceFileRemote;
}
