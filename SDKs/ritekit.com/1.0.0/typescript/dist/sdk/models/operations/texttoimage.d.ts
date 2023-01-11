import { SpeakeasyBase } from "../../../internal/utils";
export declare class TextToImageQueryParams extends SpeakeasyBase {
    animation: string;
    author: string;
    authorFont: string;
    authorFontColor: string;
    backgroundColor: string;
    bgType: string;
    brandLogo: string;
    enableHighlight: number;
    fontSize: number;
    gradientColor1: string;
    gradientColor2: string;
    gradientType: string;
    highlightColor: string;
    quote: string;
    quoteFont: string;
    quoteFontColor: string;
    showQuoteMark?: number;
}
export declare class TextToImageRequest extends SpeakeasyBase {
    queryParams: TextToImageQueryParams;
}
export declare class TextToImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
