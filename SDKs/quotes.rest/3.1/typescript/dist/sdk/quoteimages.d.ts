import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class QuoteImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteQuoteImage - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.
     *
    **/
    deleteQuoteImage(req: operations.DeleteQuoteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageResponse>;
    /**
     * deleteQuoteImageBackground - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.
     *
    **/
    deleteQuoteImageBackground(req: operations.DeleteQuoteImageBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageBackgroundResponse>;
    /**
     * deleteQuoteImageFont - Delete a font file. The user needs to be the owner of the font to be able to delete it.
     *
    **/
    deleteQuoteImageFont(req: operations.DeleteQuoteImageFontRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteImageFontResponse>;
    /**
     * getQuoteImage - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`
     *
    **/
    getQuoteImage(req: operations.GetQuoteImageRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageResponse>;
    /**
     * getQuoteImageBackgroundList - Lists background images in your private collection.
     *
    **/
    getQuoteImageBackgroundList(req: operations.GetQuoteImageBackgroundListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageBackgroundListResponse>;
    /**
     * getQuoteImageBackgroundSearch - Searches for a background image with a given tag.
     *
    **/
    getQuoteImageBackgroundSearch(req: operations.GetQuoteImageBackgroundSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageBackgroundSearchResponse>;
    /**
     * getQuoteImageFontList - Lists background images in your private collection.
     *
    **/
    getQuoteImageFontList(req: operations.GetQuoteImageFontListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageFontListResponse>;
    /**
     * getQuoteImageFontSearch - Searches for a font with a given tag.
     *
    **/
    getQuoteImageFontSearch(req: operations.GetQuoteImageFontSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageFontSearchResponse>;
    /**
     * getQuoteImageSearch - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author.
     *
    **/
    getQuoteImageSearch(req: operations.GetQuoteImageSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteImageSearchResponse>;
    /**
     * postQuoteImageBackground - Add an image for use later as a quote background image.
    **/
    postQuoteImageBackground(req: operations.PostQuoteImageBackgroundRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundResponse>;
    /**
     * postQuoteImageBackgroundTagsAdd - Add a tag to a given Image.
    **/
    postQuoteImageBackgroundTagsAdd(req: operations.PostQuoteImageBackgroundTagsAddRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundTagsAddResponse>;
    /**
     * postQuoteImageBackgroundTagsRemove - Remove a tag from a given Image.
    **/
    postQuoteImageBackgroundTagsRemove(req: operations.PostQuoteImageBackgroundTagsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageBackgroundTagsRemoveResponse>;
    /**
     * postQuoteImageFont - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
    **/
    postQuoteImageFont(req: operations.PostQuoteImageFontRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontResponse>;
    /**
     * postQuoteImageFontTagsAdd - Add a tag to a given font.
    **/
    postQuoteImageFontTagsAdd(req: operations.PostQuoteImageFontTagsAddRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontTagsAddResponse>;
    /**
     * postQuoteImageFontTagsRemove - Remove a tag from a given Font.
    **/
    postQuoteImageFontTagsRemove(req: operations.PostQuoteImageFontTagsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteImageFontTagsRemoveResponse>;
    /**
     * putQuoteImage - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!
     *
    **/
    putQuoteImage(req: operations.PutQuoteImageRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteImageResponse>;
}
