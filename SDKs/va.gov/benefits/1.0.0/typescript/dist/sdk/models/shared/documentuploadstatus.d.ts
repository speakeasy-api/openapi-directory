import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentUploadStatusAttributes } from "./documentuploadstatusattributes";
/**
 * Status record for a previously initiated document submission.
 */
export declare class DocumentUploadStatus extends SpeakeasyBase {
    attributes: DocumentUploadStatusAttributes;
    /**
     * JSON API identifier
     */
    id: string;
    /**
     * JSON API type specification
     */
    type: string;
}
