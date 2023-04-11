import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentUploadAttributes } from "./documentuploadattributes";
/**
 * Status record for a previously initiated document submission.
 */
export declare class DocumentUploadPath extends SpeakeasyBase {
    attributes: DocumentUploadAttributes;
    /**
     * JSON API identifier
     */
    id: string;
    /**
     * JSON API type specification
     */
    type: string;
}
