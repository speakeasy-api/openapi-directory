import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleModel } from "./simplemodel";
export declare class QaEntry extends SpeakeasyBase {
    category?: string;
    comment?: string;
    docId?: string;
    editorLink?: string;
    end?: number;
    inSource?: boolean;
    isCurrent?: boolean;
    module?: string;
    projectId?: SimpleModel;
    severity?: string;
    source?: string;
    sourceLanguage?: SimpleModel;
    start?: number;
    state?: string;
    targetLanguage?: SimpleModel;
    translation?: string;
    uniqueKey?: string;
    vendor?: SimpleModel;
}
