import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * The miscellaneous keyword type.
 */
export declare enum MiscKeywordTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OutlookBillingInformation = "OUTLOOK_BILLING_INFORMATION",
    OutlookDirectoryServer = "OUTLOOK_DIRECTORY_SERVER",
    OutlookKeyword = "OUTLOOK_KEYWORD",
    OutlookMileage = "OUTLOOK_MILEAGE",
    OutlookPriority = "OUTLOOK_PRIORITY",
    OutlookSensitivity = "OUTLOOK_SENSITIVITY",
    OutlookSubject = "OUTLOOK_SUBJECT",
    OutlookUser = "OUTLOOK_USER",
    Home = "HOME",
    Work = "WORK",
    Other = "OTHER"
}
/**
 * A person's miscellaneous keyword.
 */
export declare class MiscKeyword extends SpeakeasyBase {
    /**
     * Output only. The type of the miscellaneous keyword translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The miscellaneous keyword type.
     */
    type?: MiscKeywordTypeEnum;
    /**
     * The value of the miscellaneous keyword.
     */
    value?: string;
}
/**
 * A person's miscellaneous keyword.
 */
export declare class MiscKeywordInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The miscellaneous keyword type.
     */
    type?: MiscKeywordTypeEnum;
    /**
     * The value of the miscellaneous keyword.
     */
    value?: string;
}
