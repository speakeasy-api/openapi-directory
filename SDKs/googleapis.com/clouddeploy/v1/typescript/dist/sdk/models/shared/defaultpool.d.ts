import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution using the default Cloud Build pool.
 */
export declare class DefaultPool extends SpeakeasyBase {
    /**
     * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
     */
    artifactStorage?: string;
    /**
     * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
     */
    serviceAccount?: string;
}
