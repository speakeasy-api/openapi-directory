import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of properties that uniquely identify a given Docker image.
 */
export declare class Fingerprint extends SpeakeasyBase {
    /**
     * Required. The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string;
    /**
     * Required. The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[];
    /**
     * Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string;
}
