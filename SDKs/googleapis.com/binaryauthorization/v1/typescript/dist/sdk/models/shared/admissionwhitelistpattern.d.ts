import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An admission allowlist pattern exempts images from checks by admission rules.
 */
export declare class AdmissionWhitelistPattern extends SpeakeasyBase {
    /**
     * An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` wildcard, but this is allowed only in text after the `registry/` part. This also supports a trailing `**` wildcard which matches subdirectories of a given entry.
     */
    namePattern?: string;
}
