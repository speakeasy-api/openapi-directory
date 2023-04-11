import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddImageWatermarkV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddImageWatermarkV1RequestBodyImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class AddImageWatermarkV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: AddImageWatermarkV1RequestBodyFile;
    /**
     * The image to add as a watermark. The format of the image can be either PNG or JPEG.
     */
    image: AddImageWatermarkV1RequestBodyImage;
    /**
     * The distance in inches from the border of the page to the image watermark.
     */
    margin?: number;
    /**
     * The transparency level for the image watermark from 0 (opaque) to 100 (transparent).
     */
    transparency?: number;
}
/**
 * Error
 */
export declare class AddImageWatermarkV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddImageWatermarkV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    addImageWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    addImageWatermarkV14XXApplicationProblemPlusJsonObject?: AddImageWatermarkV14XXApplicationProblemPlusJson;
}
