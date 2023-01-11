import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceInput } from "./source";
/**
 * Metadata about a field.
**/
export declare class FieldMetadata extends SpeakeasyBase {
    primary?: boolean;
    source?: Source;
    sourcePrimary?: boolean;
    verified?: boolean;
}
/**
 * Metadata about a field.
**/
export declare class FieldMetadataInput extends SpeakeasyBase {
    source?: SourceInput;
    sourcePrimary?: boolean;
}
