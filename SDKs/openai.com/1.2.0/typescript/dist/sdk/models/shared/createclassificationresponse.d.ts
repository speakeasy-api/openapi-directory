import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateClassificationResponseSelectedExamples extends SpeakeasyBase {
    document?: number;
    label?: string;
    text?: string;
}
/**
 * OK
 */
export declare class CreateClassificationResponse extends SpeakeasyBase {
    completion?: string;
    label?: string;
    model?: string;
    object?: string;
    searchModel?: string;
    selectedExamples?: CreateClassificationResponseSelectedExamples[];
}
