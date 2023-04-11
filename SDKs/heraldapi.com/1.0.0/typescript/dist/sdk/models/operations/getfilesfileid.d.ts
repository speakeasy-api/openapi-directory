import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilesFileIdRequest extends SpeakeasyBase {
    /**
     * `id` for a specific file
     */
    fileId: string;
}
/**
 * Not Found
 */
export declare class GetFilesFileId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
     */
    errors?: shared.ErrorV1;
}
/**
 * Bad Request
 */
export declare class GetFilesFileId400ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
     */
    errors?: shared.ErrorV1;
}
/**
 * OK
 */
export declare class GetFilesFileId200ApplicationJSON extends SpeakeasyBase {
    /**
     * Details for a specific file.
     */
    file?: shared.FileV1;
}
export declare class GetFilesFileIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getFilesFileId200ApplicationJSONObject?: GetFilesFileId200ApplicationJSON;
    /**
     * Bad Request
     */
    getFilesFileId400ApplicationJSONObject?: GetFilesFileId400ApplicationJSON;
    /**
     * Not Found
     */
    getFilesFileId404ApplicationJSONObject?: GetFilesFileId404ApplicationJSON;
}
