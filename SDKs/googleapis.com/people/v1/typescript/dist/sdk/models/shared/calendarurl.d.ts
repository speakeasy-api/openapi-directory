import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's calendar URL.
 */
export declare class CalendarUrl extends SpeakeasyBase {
    /**
     * Output only. The type of the calendar URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the calendar URL. The type can be custom or one of these predefined values: * `home` * `freeBusy` * `work`
     */
    type?: string;
    /**
     * The calendar URL.
     */
    url?: string;
}
/**
 * A person's calendar URL.
 */
export declare class CalendarUrlInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the calendar URL. The type can be custom or one of these predefined values: * `home` * `freeBusy` * `work`
     */
    type?: string;
    /**
     * The calendar URL.
     */
    url?: string;
}
