import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiPdfWkhtmltopdfRequest extends SpeakeasyBase {
    request?: shared.WkHtmlToPdfRequestDto;
}
export declare class PostApiPdfWkhtmltopdfResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseDto?: shared.ErrorResponseDto;
    pdfResponseDto?: shared.PdfResponseDto;
    statusCode: number;
    postApiPdfWkhtmltopdf200ApplicationPdfBinaryString?: Uint8Array;
}
