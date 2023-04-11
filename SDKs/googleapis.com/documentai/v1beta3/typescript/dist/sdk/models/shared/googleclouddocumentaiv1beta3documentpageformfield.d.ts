import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A form field detected on the page.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageFormField extends SpeakeasyBase {
    /**
     * Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.
     */
    correctedKeyText?: string;
    /**
     * Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.
     */
    correctedValueText?: string;
    /**
     * Visual element describing a layout unit on a page.
     */
    fieldName?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * Visual element describing a layout unit on a page.
     */
    fieldValue?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`
     */
    valueType?: string;
}
