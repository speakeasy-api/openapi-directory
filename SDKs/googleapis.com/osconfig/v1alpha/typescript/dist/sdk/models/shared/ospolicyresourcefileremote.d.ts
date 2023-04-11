import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a file available via some URI.
 */
export declare class OSPolicyResourceFileRemote extends SpeakeasyBase {
    /**
     * SHA256 checksum of the remote file.
     */
    sha256Checksum?: string;
    /**
     * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
     */
    uri?: string;
}
