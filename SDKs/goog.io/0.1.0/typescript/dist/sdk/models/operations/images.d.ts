import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImagesRequest extends SpeakeasyBase {
    query: string;
}
export declare class Images200ApplicationJSONImageResultsImage extends SpeakeasyBase {
    alt?: string;
    src?: string;
}
export declare class Images200ApplicationJSONImageResultsLink extends SpeakeasyBase {
    domain?: string;
    href?: string;
    title?: string;
}
export declare class Images200ApplicationJSONImageResults extends SpeakeasyBase {
    image?: Images200ApplicationJSONImageResultsImage;
    link?: Images200ApplicationJSONImageResultsLink;
}
/**
 * Successful Response
 */
export declare class Images200ApplicationJSON extends SpeakeasyBase {
    answers?: string[];
    imageResults?: Images200ApplicationJSONImageResults[];
    results?: Record<string, any>[];
    total?: number;
}
export declare class ImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    images200ApplicationJSONObject?: Images200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
