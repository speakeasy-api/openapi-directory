import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Image Quality Defects
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
    /**
     * Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.
     */
    confidence?: number;
    /**
     * Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`
     */
    type?: string;
}
