import { SpeakeasyBase } from "../../../internal/utils";
import { LabelField } from "./labelfield";
/**
 * Representation of a label and its fields.
**/
export declare class Label extends SpeakeasyBase {
    fields?: Record<string, LabelField>;
    id?: string;
    kind?: string;
    revisionId?: string;
}
