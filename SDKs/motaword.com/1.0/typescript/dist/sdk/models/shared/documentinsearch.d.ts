import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
import { ManualFile } from "./manualfile";
export declare class DocumentInSearch extends SpeakeasyBase {
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
    searchResultReason?: string;
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
