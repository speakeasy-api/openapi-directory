import { SpeakeasyBase } from "../../../internal/utils";
import { JsonSchema } from "./jsonschema";
/**
 * Supports the Resumable Media Upload protocol.
 */
export declare class RestMethodMediaUploadProtocolsResumable extends SpeakeasyBase {
    /**
     * True if this endpoint supports uploading multipart media.
     */
    multipart?: boolean;
    /**
     * The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level.
     */
    path?: string;
}
/**
 * Supports uploading as a single HTTP request.
 */
export declare class RestMethodMediaUploadProtocolsSimple extends SpeakeasyBase {
    /**
     * True if this endpoint supports upload multipart media.
     */
    multipart?: boolean;
    /**
     * The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level.
     */
    path?: string;
}
/**
 * Supported upload protocols.
 */
export declare class RestMethodMediaUploadProtocols extends SpeakeasyBase {
    /**
     * Supports the Resumable Media Upload protocol.
     */
    resumable?: RestMethodMediaUploadProtocolsResumable;
    /**
     * Supports uploading as a single HTTP request.
     */
    simple?: RestMethodMediaUploadProtocolsSimple;
}
/**
 * Media upload parameters.
 */
export declare class RestMethodMediaUpload extends SpeakeasyBase {
    /**
     * MIME Media Ranges for acceptable media uploads to this method.
     */
    accept?: string[];
    /**
     * Maximum size of a media upload, such as "1MB", "2GB" or "3TB".
     */
    maxSize?: string;
    /**
     * Supported upload protocols.
     */
    protocols?: RestMethodMediaUploadProtocols;
}
/**
 * The schema for the request.
 */
export declare class RestMethodRequest extends SpeakeasyBase {
    /**
     * Schema ID for the request schema.
     */
    dollarRef?: string;
    /**
     * parameter name.
     */
    parameterName?: string;
}
/**
 * The schema for the response.
 */
export declare class RestMethodResponse extends SpeakeasyBase {
    /**
     * Schema ID for the response schema.
     */
    dollarRef?: string;
}
export declare class RestMethod extends SpeakeasyBase {
    /**
     * Description of this method.
     */
    description?: string;
    /**
     * Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header.
     */
    etagRequired?: boolean;
    /**
     * The URI path of this REST method in (RFC 6570) format without level 2 features ({+var}). Supplementary to the path property.
     */
    flatPath?: string;
    /**
     * HTTP method used by this method.
     */
    httpMethod?: string;
    /**
     * A unique ID for this method. This property can be used to match methods between different versions of Discovery.
     */
    id?: string;
    /**
     * Media upload parameters.
     */
    mediaUpload?: RestMethodMediaUpload;
    /**
     * Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first.
     */
    parameterOrder?: string[];
    /**
     * Details for all parameters in this method.
     */
    parameters?: Record<string, JsonSchema>;
    /**
     * The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level.
     */
    path?: string;
    /**
     * The schema for the request.
     */
    request?: RestMethodRequest;
    /**
     * The schema for the response.
     */
    response?: RestMethodResponse;
    /**
     * OAuth 2.0 scopes applicable to this method.
     */
    scopes?: string[];
    /**
     * Whether this method supports media downloads.
     */
    supportsMediaDownload?: boolean;
    /**
     * Whether this method supports media uploads.
     */
    supportsMediaUpload?: boolean;
    /**
     * Whether this method supports subscriptions.
     */
    supportsSubscription?: boolean;
    /**
     * Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download.
     */
    useMediaDownloadService?: boolean;
}
