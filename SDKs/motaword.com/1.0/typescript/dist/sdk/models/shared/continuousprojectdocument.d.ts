import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";
/**
 * The newly added continuous project document object.
 */
export declare class ContinuousProjectDocument extends SpeakeasyBase {
    billedWordCount?: number;
    id?: string;
    links?: DocumentLinks;
    name?: string;
    postEditEnabled?: boolean;
    projectId?: string;
    sourceLanguage?: string;
    targetLanguages?: string[];
    wordCount?: number;
}
