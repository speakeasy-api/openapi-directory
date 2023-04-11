import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplicationDocumentCreateRequest extends SpeakeasyBase {
    /**
     * Type of the document
     */
    documentType: string;
    /**
     * Display name of the application document
     */
    name: string;
    /**
     * General platform notes about the application document
     */
    notes?: string;
}
