import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Imaging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * html5Render - HTML5 Render
     *
     * Render HTML content to PDF, JPG or PNG
    **/
    html5Render(req: operations.Html5RenderRequest, config?: AxiosRequestConfig): Promise<operations.Html5RenderResponse>;
    /**
     * imageResize - Image Resize
     *
     * Resize an image and output as either JPEG or PNG
    **/
    imageResize(req: operations.ImageResizeRequest, config?: AxiosRequestConfig): Promise<operations.ImageResizeResponse>;
    /**
     * imageWatermark - Image Watermark
     *
     * Watermark one image with another image
    **/
    imageWatermark(req: operations.ImageWatermarkRequest, config?: AxiosRequestConfig): Promise<operations.ImageWatermarkResponse>;
    /**
     * qrCode - QR Code
     *
     * Generate a QR code as a PNG image
    **/
    qrCode(req: operations.QrCodeRequest, config?: AxiosRequestConfig): Promise<operations.QrCodeResponse>;
}
