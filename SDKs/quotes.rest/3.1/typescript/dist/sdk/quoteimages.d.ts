import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create beatiful quote images or get one of the premade images. You need an API key to access this service.
 *
 * @see {@link https://theysaidso.com/api/quote#image} - Find out more about image
 */
export declare class QuoteImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.
     *
     */
    deleteQuoteImage(req: operations.DeleteQuoteImageRequest, security: operations.DeleteQuoteImageSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageResponse>;
    /**
     * Delete a background image file. The user needs to be the owner of the background image to be able to delete it.
     *
     */
    deleteQuoteImageBackground(req: operations.DeleteQuoteImageBackgroundRequest, security: operations.DeleteQuoteImageBackgroundSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageBackgroundResponse>;
    /**
     * Delete a font file. The user needs to be the owner of the font to be able to delete it.
     *
     */
    deleteQuoteImageFont(req: operations.DeleteQuoteImageFontRequest, security: operations.DeleteQuoteImageFontSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageFontResponse>;
    /**
     * Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`
     *
     */
    getQuoteImage(req: operations.GetQuoteImageRequest, security: operations.GetQuoteImageSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageResponse>;
    /**
     * Lists background images in your private collection.
     *
     */
    getQuoteImageBackgroundList(req: operations.GetQuoteImageBackgroundListRequest, security: operations.GetQuoteImageBackgroundListSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageBackgroundListResponse>;
    /**
     * Searches for a background image with a given tag.
     *
     */
    getQuoteImageBackgroundSearch(req: operations.GetQuoteImageBackgroundSearchRequest, security: operations.GetQuoteImageBackgroundSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageBackgroundSearchResponse>;
    /**
     * Lists background images in your private collection.
     *
     */
    getQuoteImageFontList(req: operations.GetQuoteImageFontListRequest, security: operations.GetQuoteImageFontListSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageFontListResponse>;
    /**
     * Searches for a font with a given tag.
     *
     */
    getQuoteImageFontSearch(req: operations.GetQuoteImageFontSearchRequest, security: operations.GetQuoteImageFontSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageFontSearchResponse>;
    /**
     * Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author.
     *
     */
    getQuoteImageSearch(req: operations.GetQuoteImageSearchRequest, security: operations.GetQuoteImageSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageSearchResponse>;
    /**
     * Add an image for use later as a quote background image.
     */
    postQuoteImageBackground(req: operations.PostQuoteImageBackgroundRequestBody, security: operations.PostQuoteImageBackgroundSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundResponse>;
    /**
     * Add a tag to a given Image.
     */
    postQuoteImageBackgroundTagsAdd(req: operations.PostQuoteImageBackgroundTagsAddRequest, security: operations.PostQuoteImageBackgroundTagsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundTagsAddResponse>;
    /**
     * Remove a tag from a given Image.
     */
    postQuoteImageBackgroundTagsRemove(req: operations.PostQuoteImageBackgroundTagsRemoveRequest, security: operations.PostQuoteImageBackgroundTagsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundTagsRemoveResponse>;
    /**
     * Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
     */
    postQuoteImageFont(req: operations.PostQuoteImageFontRequestBody, security: operations.PostQuoteImageFontSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontResponse>;
    /**
     * Add a tag to a given font.
     */
    postQuoteImageFontTagsAdd(req: operations.PostQuoteImageFontTagsAddRequest, security: operations.PostQuoteImageFontTagsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontTagsAddResponse>;
    /**
     * Remove a tag from a given Font.
     */
    postQuoteImageFontTagsRemove(req: operations.PostQuoteImageFontTagsRemoveRequest, security: operations.PostQuoteImageFontTagsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontTagsRemoveResponse>;
    /**
     * Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!
     *
     */
    putQuoteImage(req: operations.PutQuoteImageRequest, security: operations.PutQuoteImageSecurity, config?: AxiosRequestConfig): Promise<operations.PutQuoteImageResponse>;
}
