import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of destination for Import related errors.
 */
export declare class GoogleCloudRetailV2alphaImportErrorsConfig extends SpeakeasyBase {
    /**
     * Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string;
}
