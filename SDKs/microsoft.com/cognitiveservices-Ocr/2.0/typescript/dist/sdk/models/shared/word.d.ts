import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WordConfidenceEnum {
    High = "High",
    Low = "Low"
}
/**
 * An object representing a recognized word.
**/
export declare class Word extends SpeakeasyBase {
    boundingBox: number[];
    confidence?: WordConfidenceEnum;
    text: string;
}
