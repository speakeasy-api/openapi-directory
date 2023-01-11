import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalLink } from "./optionallink";
/**
 * A link to a related resource, or an empty object if there is no resource to link to
**/
export declare class BatchOptionalLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Reference to the various downloadable file formats for the generated label
 *
**/
export declare class BatchLabelDownload extends SpeakeasyBase {
    href?: string;
    pdf?: string;
    png?: string;
    zpl?: string;
}
/**
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 *
**/
export declare class Batch extends SpeakeasyBase {
    batchErrorsUrl: BatchOptionalLink;
    batchId: Record<string, any>;
    batchLabelsUrl: OptionalLink;
    batchNotes: string;
    batchShipmentsUrl: OptionalLink;
    completed: number;
    count: number;
    createdAt: Record<string, any>;
    errors: number;
    externalBatchId: string;
    formDownload: BatchOptionalLink;
    forms: number;
    labelDownload: BatchLabelDownload;
    labelFormat: Record<string, any>;
    labelLayout: Record<string, any>;
    processedAt: Record<string, any>;
    status: Record<string, any>;
    warnings: number;
}
