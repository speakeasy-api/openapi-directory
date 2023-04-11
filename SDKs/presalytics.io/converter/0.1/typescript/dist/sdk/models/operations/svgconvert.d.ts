import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SvgconvertFileToConvertFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * Fizepath to pptx file
 */
export declare class SvgconvertFileToConvert extends SpeakeasyBase {
    file?: SvgconvertFileToConvertFile;
}
/**
 * Url of svg file
 */
export declare class SvgconvertFileUrl extends SpeakeasyBase {
    blobName?: string;
    blobUrl?: string;
}
export declare class SvgconvertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Url of svg file
     */
    fileUrl?: SvgconvertFileUrl;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
