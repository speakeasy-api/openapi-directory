import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of destination for Import related errors.
 */
export declare class GoogleCloudDiscoveryengineV1betaImportErrorConfig extends SpeakeasyBase {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors will be written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string;
}
