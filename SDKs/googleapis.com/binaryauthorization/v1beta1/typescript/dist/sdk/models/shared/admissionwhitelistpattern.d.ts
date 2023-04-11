import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An admission allowlist pattern exempts images from checks by admission rules.
 */
export declare class AdmissionWhitelistPattern extends SpeakeasyBase {
    /**
     * An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part. `*` wildcard does not match `/`, i.e., `gcr.io/nginx*` matches `gcr.io/nginx@latest`, but it does not match `gcr.io/nginx/image`. This also supports a trailing `**` wildcard which matches subdirectories, i.e., `gcr.io/nginx**` matches `gcr.io/nginx/image`.
     */
    namePattern?: string;
}
