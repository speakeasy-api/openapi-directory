import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HTMLRenderRequestBody extends SpeakeasyBase {
    /**
     * The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
     */
    content: string;
    /**
     * Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'
     */
    css?: string;
    /**
     * Number of seconds to wait before rendering the page (can be useful for pages with animations etc)
     */
    delay?: number;
    /**
     * The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}
     */
    footer?: string;
    /**
     * Which format to output, available options are: PDF, PNG, JPG
     */
    format?: string;
    /**
     * Render the final document in grayscale
     */
    grayscale?: boolean;
    /**
     * The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}
     */
    header?: string;
    /**
     * Ignore any TLS/SSL certificate errors
     */
    ignoreCertificateErrors?: boolean;
    /**
     * If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content
     */
    imageHeight?: number;
    /**
     * If rendering to an image format (PNG or JPG) use this image width (in pixels)
     */
    imageWidth?: number;
    /**
     * Set the document to landscape orientation
     */
    landscape?: boolean;
    /**
     * The document margin (in mm)
     */
    margin?: number;
    /**
     * The document bottom margin (in mm)
     */
    marginBottom?: number;
    /**
     * The document left margin (in mm)
     */
    marginLeft?: number;
    /**
     * The document right margin (in mm)
     */
    marginRight?: number;
    /**
     * The document top margin (in mm)
     */
    marginTop?: number;
    /**
     * Set the PDF page height explicitly (in mm)
     */
    pageHeight?: number;
    /**
     * Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter
     */
    pageSize?: string;
    /**
     * Set the PDF page width explicitly (in mm)
     */
    pageWidth?: number;
    /**
     * Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds
     */
    timeout?: number;
    /**
     * The document title
     */
    title?: string;
    /**
     * Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)
     */
    zoom?: number;
}
export declare class HTMLRenderResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    htmlRender200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
