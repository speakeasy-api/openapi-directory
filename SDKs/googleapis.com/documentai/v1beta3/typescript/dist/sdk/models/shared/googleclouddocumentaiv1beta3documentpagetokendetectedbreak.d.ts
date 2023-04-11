import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detected break type.
 */
export declare enum GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Space = "SPACE",
    WideSpace = "WIDE_SPACE",
    Hyphen = "HYPHEN"
}
/**
 * Detected break at the end of a Token.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak extends SpeakeasyBase {
    /**
     * Detected break type.
     */
    type?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum;
}
