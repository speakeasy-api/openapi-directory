import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detected break type.
 */
export declare enum GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum {
    Unknown = "UNKNOWN",
    Space = "SPACE",
    SureSpace = "SURE_SPACE",
    EolSureSpace = "EOL_SURE_SPACE",
    Hyphen = "HYPHEN",
    LineBreak = "LINE_BREAK"
}
/**
 * Detected start or end of a structural component.
 */
export declare class GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak extends SpeakeasyBase {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean;
    /**
     * Detected break type.
     */
    type?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakTypeEnum;
}
