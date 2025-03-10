import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksLayersAnnotationDataGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BooksLayersAnnotationDataGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * For the dictionary layer. Whether or not to allow web definitions.
     */
    allowWebDefinitions?: boolean;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the annotation data to retrieve.
     */
    annotationDataId: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The content version for the volume you are trying to retrieve.
     */
    contentVersion: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The requested pixel height for any images. If height is provided width must also be provided.
     */
    h?: number;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The requested scale for the image.
     */
    scale?: number;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId: string;
    /**
     * The requested pixel width for any images. If width is provided height must also be provided.
     */
    w?: number;
}
export declare class BooksLayersAnnotationDataGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dictionaryAnnotationdata?: shared.DictionaryAnnotationdata;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
