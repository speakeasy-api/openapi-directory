import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsArchive403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsArchive401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsArchive400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsArchive400ApplicationJSONObject?: PostTargetsArchive400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsArchive401ApplicationJSONObject?: PostTargetsArchive401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsArchive403ApplicationJSONObject?: PostTargetsArchive403ApplicationJSON;
    /**
     * Target id list
     */
    targetIds?: string[];
}
