import { SpeakeasyBase } from "../../../internal/utils";
import { PdfDimensionAttributes } from "./pdfdimensionattributes";
export declare class PdfUploadAttributesContentAttachments extends SpeakeasyBase {
    dimensions?: PdfDimensionAttributes;
    /**
     * The number of pages in this attachment
     */
    pageCount?: number;
}
export declare class PdfUploadAttributesContent extends SpeakeasyBase {
    attachments?: PdfUploadAttributesContentAttachments[];
    dimensions?: PdfDimensionAttributes;
    /**
     * The total number of pages solely in this PDF document
     */
    pageCount?: number;
}
export declare class PdfUploadAttributes extends SpeakeasyBase {
    content: PdfUploadAttributesContent;
    /**
     * The total number of documents contained in this upload
     */
    totalDocuments: number;
    /**
     * The total number of pages contained in this upload
     */
    totalPages: number;
}
