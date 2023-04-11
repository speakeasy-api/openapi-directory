import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * **DEPRECATED**: No data will be returned A person's relationship status.
 */
export declare class RelationshipStatus extends SpeakeasyBase {
    /**
     * Output only. The value of the relationship status translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedValue?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The relationship status. The value can be custom or one of these predefined values: * `single` * `inARelationship` * `engaged` * `married` * `itsComplicated` * `openRelationship` * `widowed` * `inDomesticPartnership` * `inCivilUnion`
     */
    value?: string;
}
