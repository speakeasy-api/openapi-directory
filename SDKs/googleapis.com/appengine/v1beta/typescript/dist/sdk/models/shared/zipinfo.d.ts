import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The zip file information for a zip deployment.
 */
export declare class ZipInfo extends SpeakeasyBase {
    /**
     * An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.
     */
    filesCount?: number;
    /**
     * URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com//'.
     */
    sourceUrl?: string;
}
