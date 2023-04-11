import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BackgroundRemoval {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove the background of an image
     *
     * @remarks
     * Removes the background of a JPG/PNG image.
     *
     * * File size: up to 12 MB
     * * Image source: File upload (binary or as base64 encoded string) or download from URL
     * * Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
     * * Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)
     *
     * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
     *
     */
    postRemovebgForm(req: shared.RemoveBgJson, config?: AxiosRequestConfig): Promise<operations.PostRemovebgFormResponse>;
    /**
     * Remove the background of an image
     *
     * @remarks
     * Removes the background of a JPG/PNG image.
     *
     * * File size: up to 12 MB
     * * Image source: File upload (binary or as base64 encoded string) or download from URL
     * * Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
     * * Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)
     *
     * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
     *
     */
    postRemovebgJson(req: shared.RemoveBgJson, config?: AxiosRequestConfig): Promise<operations.PostRemovebgJsonResponse>;
    /**
     * Remove the background of an image
     *
     * @remarks
     * Removes the background of a JPG/PNG image.
     *
     * * File size: up to 12 MB
     * * Image source: File upload (binary or as base64 encoded string) or download from URL
     * * Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
     * * Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)
     *
     * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
     *
     */
    postRemovebgMultipart(req: shared.RemoveBgMultipart, config?: AxiosRequestConfig): Promise<operations.PostRemovebgMultipartResponse>;
}
