import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2AutoMlParams } from "./googleclouddocumentaiv1beta2automlparams";
import { GoogleCloudDocumentaiV1beta2EntityExtractionParams } from "./googleclouddocumentaiv1beta2entityextractionparams";
import { GoogleCloudDocumentaiV1beta2FormExtractionParams } from "./googleclouddocumentaiv1beta2formextractionparams";
import { GoogleCloudDocumentaiV1beta2InputConfig } from "./googleclouddocumentaiv1beta2inputconfig";
import { GoogleCloudDocumentaiV1beta2OcrParams } from "./googleclouddocumentaiv1beta2ocrparams";
import { GoogleCloudDocumentaiV1beta2OutputConfig } from "./googleclouddocumentaiv1beta2outputconfig";
import { GoogleCloudDocumentaiV1beta2TableExtractionParams } from "./googleclouddocumentaiv1beta2tableextractionparams";
/**
 * Request to process one document.
 */
export declare class GoogleCloudDocumentaiV1beta2ProcessDocumentRequest extends SpeakeasyBase {
    /**
     * Parameters to control AutoML model prediction behavior.
     */
    automlParams?: GoogleCloudDocumentaiV1beta2AutoMlParams;
    /**
     * Specifies a known document type for deeper structure detection. Valid values are currently "general" and "invoice". If not provided, "general"\ is used as default. If any other value is given, the request is rejected.
     */
    documentType?: string;
    /**
     * Parameters to control entity extraction behavior.
     */
    entityExtractionParams?: GoogleCloudDocumentaiV1beta2EntityExtractionParams;
    /**
     * Parameters to control form extraction behavior.
     */
    formExtractionParams?: GoogleCloudDocumentaiV1beta2FormExtractionParams;
    /**
     * The desired input location and metadata.
     */
    inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;
    /**
     * Parameters to control Optical Character Recognition (OCR) behavior.
     */
    ocrParams?: GoogleCloudDocumentaiV1beta2OcrParams;
    /**
     * The desired output location and metadata.
     */
    outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;
    /**
     * Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
     */
    parent?: string;
    /**
     * Parameters to control table extraction behavior.
     */
    tableExtractionParams?: GoogleCloudDocumentaiV1beta2TableExtractionParams;
}
