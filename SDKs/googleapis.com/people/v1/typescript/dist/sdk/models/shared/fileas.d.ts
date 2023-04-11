import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * The name that should be used to sort the person in a list.
 */
export declare class FileAs extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The file-as value
     */
    value?: string;
}
/**
 * The name that should be used to sort the person in a list.
 */
export declare class FileAsInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The file-as value
     */
    value?: string;
}
