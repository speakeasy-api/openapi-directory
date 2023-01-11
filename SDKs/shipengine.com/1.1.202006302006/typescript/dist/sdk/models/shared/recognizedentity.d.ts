import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
 *
**/
export declare class RecognizedEntity extends SpeakeasyBase {
    endIndex: number;
    result?: Record<string, any>;
    score: number;
    startIndex: number;
    text: string;
    type: string;
}
