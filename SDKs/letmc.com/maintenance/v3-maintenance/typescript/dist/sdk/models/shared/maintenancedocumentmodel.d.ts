import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Submission Model - Handles all the fields required to attach documents to an online maintenance job
 */
export declare class MaintenanceDocumentModel extends SpeakeasyBase {
    /**
     * The document Mime Type
     */
    mimeType?: string;
    /**
     * The document URL (This has to be public)
     */
    url?: string;
}
