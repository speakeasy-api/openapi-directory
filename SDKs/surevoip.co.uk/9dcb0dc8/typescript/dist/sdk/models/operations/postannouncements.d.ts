import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Upload a wav file to be used in other parts of the API - 10Mb limit, ending in .wav
 */
export declare class PostAnnouncementsRequestBody extends SpeakeasyBase {
    description?: string;
    file?: string;
}
/**
 * Sorry, you have reached your max quota of 10 announcement files. Please delete some.
 */
export declare class PostAnnouncements403ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnouncements400ApplicationJSONErrors extends SpeakeasyBase {
    field: string;
    message: string[];
}
/**
 * Bad data
 */
export declare class PostAnnouncements400ApplicationJSON extends SpeakeasyBase {
    errors: PostAnnouncements400ApplicationJSONErrors[];
}
export declare class PostAnnouncements201ApplicationJSONAnnouncementUrl extends SpeakeasyBase {
    download?: string;
    href?: string;
    title?: string;
}
export declare class PostAnnouncements201ApplicationJSONAnnouncement extends SpeakeasyBase {
    creationDate?: string;
    description?: string;
    fileInternal?: string;
    filename?: string;
    id?: string;
    size?: number;
    srcIpAddress?: string;
    url?: PostAnnouncements201ApplicationJSONAnnouncementUrl;
}
/**
 * File created on filesystem.
 */
export declare class PostAnnouncements201ApplicationJSON extends SpeakeasyBase {
    announcement?: PostAnnouncements201ApplicationJSONAnnouncement;
}
export declare class PostAnnouncementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File created on filesystem.
     */
    postAnnouncements201ApplicationJSONObject?: PostAnnouncements201ApplicationJSON;
    /**
     * Bad data
     */
    postAnnouncements400ApplicationJSONObject?: PostAnnouncements400ApplicationJSON;
    /**
     * Sorry, you have reached your max quota of 10 announcement files. Please delete some.
     */
    postAnnouncements403ApplicationJSONObject?: PostAnnouncements403ApplicationJSON;
    /**
     * Problem saving file
     */
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
