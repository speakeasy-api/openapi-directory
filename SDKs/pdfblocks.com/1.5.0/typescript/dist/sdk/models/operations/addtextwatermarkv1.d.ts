import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The color of the text watermark.
 */
export declare enum AddTextWatermarkV1RequestBodyColorEnum {
    Red = "Red",
    Blue = "Blue",
    Gray = "Gray",
    Black = "Black"
}
export declare class AddTextWatermarkV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddTextWatermarkV1RequestBody extends SpeakeasyBase {
    /**
     * The color of the text watermark.
     */
    color?: AddTextWatermarkV1RequestBodyColorEnum;
    /**
     * The input PDF document
     */
    file: AddTextWatermarkV1RequestBodyFile;
    /**
     * The first line of text of the watermark.
     */
    line1: string;
    /**
     * The second line of text of the watermark.
     */
    line2?: string;
    /**
     * The third line of text of the watermark.
     */
    line3?: string;
    /**
     * The distance in inches from the border of the page to the text watermark.
     */
    margin?: number;
    /**
     * The [id of the text watermark template](https://www.pdfblocks.com/docs/api/v1/text-watermark-templates.pdf).
     */
    template?: number;
    /**
     * The transparency level for the text watermark from 0 (opaque) to 100 (transparent).
     */
    transparency?: number;
}
/**
 * Error
 */
export declare class AddTextWatermarkV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddTextWatermarkV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    addTextWatermarkV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    addTextWatermarkV14XXApplicationProblemPlusJsonObject?: AddTextWatermarkV14XXApplicationProblemPlusJson;
}
