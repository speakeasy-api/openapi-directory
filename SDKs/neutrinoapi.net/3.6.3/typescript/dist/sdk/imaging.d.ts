import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Imaging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * HTML Render
     *
     * @remarks
     * Render HTML content to PDF, JPG or PNG
     */
    htmlRender(req: operations.HTMLRenderRequestBody, config?: AxiosRequestConfig): Promise<operations.HTMLRenderResponse>;
    /**
     * Image Resize
     *
     * @remarks
     * Resize an image and output as either JPEG or PNG
     */
    imageResize(req: operations.ImageResizeRequestBody, config?: AxiosRequestConfig): Promise<operations.ImageResizeResponse>;
    /**
     * Image Watermark
     *
     * @remarks
     * Watermark one image with another image
     */
    imageWatermark(req: operations.ImageWatermarkRequestBody, config?: AxiosRequestConfig): Promise<operations.ImageWatermarkResponse>;
    /**
     * QR Code
     *
     * @remarks
     * Generate a QR code as a PNG image
     */
    qrCode(req: operations.QRCodeRequestBody, config?: AxiosRequestConfig): Promise<operations.QRCodeResponse>;
}
