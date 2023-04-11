import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An audio spot for insertion.
 */
export declare class Spot extends SpeakeasyBase {
    /**
     * The date the spot was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The length (duration) of the spot in seconds.
     */
    duration?: number;
    /**
     * The name of the audio content file. Generated at creation.
     */
    fileName?: string;
    /**
     * The size of the audio content file in bytes. Generated at creation.
     */
    fileSize?: number;
    /**
     * The unique ID of the spot. Generated at creation.
     */
    id?: number;
    /**
     * The date the spot was last modified/updated. Automatically updated on any write operation.
     */
    lastModifiedDate?: Date;
    /**
     * The date the spot audio file was uploaded. Automatically updated on upload.
     */
    lastUploadedDate?: Date;
    /**
     * The unique name of the spot
     */
    name?: string;
    /**
     * Miscellaneous notes about the spot
     */
    notes?: string;
    /**
     * The original name of the audio content file.
     */
    originalFileName?: string;
}
