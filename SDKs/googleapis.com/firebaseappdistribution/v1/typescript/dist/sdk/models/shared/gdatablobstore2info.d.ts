import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information to read/write to blobstore2.
 */
export declare class GdataBlobstore2Info extends SpeakeasyBase {
    /**
     * The blob generation id.
     */
    blobGeneration?: string;
    /**
     * The blob id, e.g., /blobstore/prod/playground/scotty
     */
    blobId?: string;
    /**
     * Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.
     */
    downloadReadHandle?: string;
    /**
     * The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.
     */
    readToken?: string;
    /**
     * Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.
     */
    uploadMetadataContainer?: string;
}
