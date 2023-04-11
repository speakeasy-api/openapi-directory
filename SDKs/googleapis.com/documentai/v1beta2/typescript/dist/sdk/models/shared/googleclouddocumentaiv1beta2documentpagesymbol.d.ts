import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
/**
 * A detected symbol.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageSymbol extends SpeakeasyBase {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
}
