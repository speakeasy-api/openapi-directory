import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalLink } from "./optionallink";
/**
 * A link to a related resource, or an empty object if there is no resource to link to
 */
export declare class GetBatchByIdResponseBodyOptionalLink extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The type of resource, or the type of relationship to the parent resource
     */
    type?: string;
}
/**
 * Reference to the various downloadable file formats for the generated label
 *
 * @remarks
 *
 */
export declare class GetBatchByIdResponseBodyLabelDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The URL for the pdf generated label
     */
    pdf?: string;
    /**
     * The URL for the png generated label
     */
    png?: string;
    /**
     * The URL for the zpl generated label
     */
    zpl?: string;
}
/**
 * The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
 *
 * @remarks
 *
 * |Label Format  | Supported Carriers
 * |--------------|-----------------------------------
 * |`pdf`         | All carriers
 * |`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`
 * |`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps`
 *
 */
export declare enum GetBatchByIdResponseBodyLabelFormatEnum {
    Pdf = "pdf",
    Png = "png",
    Zpl = "zpl"
}
/**
 * The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
 *
 * @remarks
 *
 */
export declare enum GetBatchByIdResponseBodyLabelLayoutEnum {
    Fourx6 = "4x6",
    Letter = "letter"
}
/**
 * The possible batch status values
 */
export declare enum GetBatchByIdResponseBodyBatchStatusEnum {
    Open = "open",
    Queued = "queued",
    Processing = "processing",
    Completed = "completed",
    CompletedWithErrors = "completed_with_errors",
    Archived = "archived",
    Notifying = "notifying",
    Invalid = "invalid"
}
/**
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 *
 * @remarks
 * thousands of labels at a time.
 *
 */
export declare class GetBatchByIdResponseBody extends SpeakeasyBase {
    /**
     * Link to batch errors endpoint
     */
    batchErrorsUrl: GetBatchByIdResponseBodyOptionalLink;
    /**
     * A string that uniquely identifies the batch
     */
    batchId: string;
    /**
     * Link to batch labels query
     */
    batchLabelsUrl: OptionalLink;
    /**
     * Custom notes you can add for each created batch
     */
    batchNotes: string;
    /**
     * The batch number.
     */
    batchNumber: string;
    /**
     * The batch shipments endpoint
     */
    batchShipmentsUrl: OptionalLink;
    /**
     * The number of labels generated in the batch
     */
    completed: number;
    /**
     * The total of errors, warnings, and completed properties
     */
    count: number;
    /**
     * The date and time the batch was created in ShipEngine
     */
    createdAt: Date;
    /**
     * The number of errors that occurred while generating the batch
     */
    errors: number;
    /**
     * A string that uniquely identifies the external batch
     */
    externalBatchId: string;
    /**
     * The form download for any customs that are needed
     */
    formDownload: GetBatchByIdResponseBodyOptionalLink;
    /**
     * The number of forms for customs that are available for download
     */
    forms: number;
    /**
     * The label download for the batch
     */
    labelDownload: GetBatchByIdResponseBodyLabelDownload;
    labelFormat: GetBatchByIdResponseBodyLabelFormatEnum;
    /**
     * label layout
     */
    labelLayout: GetBatchByIdResponseBodyLabelLayoutEnum;
    /**
     * The date and time the batch was processed in ShipEngine
     */
    processedAt: Date;
    status: GetBatchByIdResponseBodyBatchStatusEnum;
    /**
     * The number of warnings that occurred while generating the batch
     */
    warnings: number;
}
