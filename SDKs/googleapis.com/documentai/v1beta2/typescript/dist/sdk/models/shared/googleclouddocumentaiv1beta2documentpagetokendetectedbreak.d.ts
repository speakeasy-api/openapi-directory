import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detected break type.
 */
export declare enum GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Space = "SPACE",
    WideSpace = "WIDE_SPACE",
    Hyphen = "HYPHEN"
}
/**
 * Detected break at the end of a Token.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak extends SpeakeasyBase {
    /**
     * Detected break type.
     */
    type?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum;
}
