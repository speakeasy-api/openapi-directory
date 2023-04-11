import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * Arbitrary user data that is populated by the end users.
 */
export declare class UserDefined extends SpeakeasyBase {
    /**
     * The end user specified key of the user defined data.
     */
    key?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The end user specified value of the user defined data.
     */
    value?: string;
}
/**
 * Arbitrary user data that is populated by the end users.
 */
export declare class UserDefinedInput extends SpeakeasyBase {
    /**
     * The end user specified key of the user defined data.
     */
    key?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The end user specified value of the user defined data.
     */
    value?: string;
}
