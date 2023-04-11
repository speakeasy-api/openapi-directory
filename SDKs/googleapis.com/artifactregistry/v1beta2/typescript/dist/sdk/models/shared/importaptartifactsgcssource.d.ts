import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Cloud Storage location where the artifacts currently reside.
 */
export declare class ImportAptArtifactsGcsSource extends SpeakeasyBase {
    /**
     * Cloud Storage paths URI (e.g., gs://my_bucket//my_object).
     */
    uris?: string[];
    /**
     * Supports URI wildcards for matching multiple objects from a single URI.
     */
    useWildcards?: boolean;
}
