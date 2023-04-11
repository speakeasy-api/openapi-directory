import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
import { ManualFile } from "./manualfile";
/**
 * Document model
 */
export declare class Document extends SpeakeasyBase {
    /**
     * Extension of the file
     */
    fileType?: string;
    hasCustomPackage?: boolean;
    id?: number;
    links?: DocumentLinks;
    manualFiles?: ManualFile[];
    name?: string;
    projectId?: number;
    reviewInManualEditor?: boolean;
    scheme?: Record<string, any>;
    searchScore?: number;
    sourceLanguage?: string;
    subject?: string;
    targetLanguages?: string[];
    /**
     * Unix epoch time
     */
    uploadedAt?: number;
    wordCount?: number;
}
