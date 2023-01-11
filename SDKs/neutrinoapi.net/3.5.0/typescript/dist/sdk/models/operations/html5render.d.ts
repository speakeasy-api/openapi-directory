import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Html5RenderRequestBody extends SpeakeasyBase {
    content: string;
    css?: string;
    footerFont?: string;
    footerFontSize?: number;
    footerLine?: boolean;
    footerSize?: number;
    footerTextCenter?: string;
    footerTextLeft?: string;
    footerTextRight?: string;
    format?: string;
    forms?: boolean;
    grayscale?: boolean;
    headerFont?: string;
    headerFontSize?: number;
    headerLine?: boolean;
    headerSize?: number;
    headerTextCenter?: string;
    headerTextLeft?: string;
    headerTextRight?: string;
    imageHeight?: number;
    imageWidth?: number;
    landscape?: boolean;
    margin?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    mediaPrint?: boolean;
    mediaQueries?: boolean;
    pageHeight?: number;
    pageSize?: string;
    pageWidth?: number;
    renderDelay?: number;
    title?: string;
    zoom?: number;
}
export declare class Html5RenderRequest extends SpeakeasyBase {
    request: Html5RenderRequestBody;
}
export declare class Html5RenderResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    html5Render200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
