import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
 */
export declare class ClientData extends SpeakeasyBase {
    /**
     * The client specified key of the client data.
     */
    key?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The client specified value of the client data.
     */
    value?: string;
}
/**
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
 */
export declare class ClientDataInput extends SpeakeasyBase {
    /**
     * The client specified key of the client data.
     */
    key?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The client specified value of the client data.
     */
    value?: string;
}
