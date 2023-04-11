import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * **DEPRECATED**: No data will be returned A person's relationship interest .
 */
export declare class RelationshipInterest extends SpeakeasyBase {
    /**
     * Output only. The value of the relationship interest translated and formatted in the viewer's account locale or the locale specified in the Accept-Language HTTP header.
     */
    formattedValue?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The kind of relationship the person is looking for. The value can be custom or one of these predefined values: * `friend` * `date` * `relationship` * `networking`
     */
    value?: string;
}
