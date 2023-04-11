import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAnswerResponseSelectedDocuments extends SpeakeasyBase {
    document?: number;
    text?: string;
}
/**
 * OK
 */
export declare class CreateAnswerResponse extends SpeakeasyBase {
    answers?: string[];
    completion?: string;
    model?: string;
    object?: string;
    searchModel?: string;
    selectedDocuments?: CreateAnswerResponseSelectedDocuments[];
}
