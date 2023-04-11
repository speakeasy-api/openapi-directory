import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";
/**
 * Results of redacting an image.
 */
export declare class GooglePrivacyDlpV2RedactImageResponse extends SpeakeasyBase {
    /**
     * If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image.
     */
    extractedText?: string;
    /**
     * All the findings for a single scanned item.
     */
    inspectResult?: GooglePrivacyDlpV2InspectResult;
    /**
     * The redacted image. The type will be the same as the original image.
     */
    redactedImage?: string;
}
