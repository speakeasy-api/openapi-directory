import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * An identifier from an external entity related to the person.
 */
export declare class ExternalId extends SpeakeasyBase {
    /**
     * Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the external ID. The type can be custom or one of these predefined values: * `account` * `customer` * `loginId` * `network` * `organization`
     */
    type?: string;
    /**
     * The value of the external ID.
     */
    value?: string;
}
/**
 * An identifier from an external entity related to the person.
 */
export declare class ExternalIdInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the external ID. The type can be custom or one of these predefined values: * `account` * `customer` * `loginId` * `network` * `organization`
     */
    type?: string;
    /**
     * The value of the external ID.
     */
    value?: string;
}
