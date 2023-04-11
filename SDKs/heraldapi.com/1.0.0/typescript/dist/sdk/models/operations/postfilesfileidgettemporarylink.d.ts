import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFilesFileIdGetTemporaryLinkRequest extends SpeakeasyBase {
    /**
     * `id` for a specific file
     */
    fileId: string;
}
/**
 * #### Not Found
 */
export declare class PostFilesFileIdGetTemporaryLink404ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
     */
    errors?: shared.ErrorV1;
}
/**
 * #### Bad Request
 *
 * @remarks
 *
 * The file may have been deleted. You cannot get a temporary link for a file with `status: deleted`. You can check the `status` of a file using [`/files/{file_id}`](../reference/HeraldAPI.v1.yaml/paths/~1files/get)
 */
export declare class PostFilesFileIdGetTemporaryLink400ApplicationXML extends SpeakeasyBase {
    /**
     * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
     */
    errors?: shared.ErrorV1;
}
/**
 * #### Bad Request
 *
 * @remarks
 *
 * The file may have been deleted. You cannot get a temporary link for a file with `status: deleted`. You can check the `status` of a file using [`/files/{file_id}`](../reference/HeraldAPI.v1.yaml/paths/~1files/get)
 */
export declare class PostFilesFileIdGetTemporaryLink400ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
     */
    errors?: shared.ErrorV1;
}
/**
 * OK
 */
export declare class PostFilesFileIdGetTemporaryLink200ApplicationJSON extends SpeakeasyBase {
    /**
     * A temporary link for a file, that lasts for 15 minutes.
     */
    temporaryLink?: shared.TemporaryLinkV1;
}
export declare class PostFilesFileIdGetTemporaryLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postFilesFileIdGetTemporaryLink200ApplicationJSONObject?: PostFilesFileIdGetTemporaryLink200ApplicationJSON;
    /**
     * #### Bad Request
     *
     * @remarks
     *
     * The file may have been deleted. You cannot get a temporary link for a file with `status: deleted`. You can check the `status` of a file using [`/files/{file_id}`](../reference/HeraldAPI.v1.yaml/paths/~1files/get)
     */
    postFilesFileIdGetTemporaryLink400ApplicationJSONObject?: PostFilesFileIdGetTemporaryLink400ApplicationJSON;
    /**
     * #### Not Found
     */
    postFilesFileIdGetTemporaryLink404ApplicationJSONObject?: PostFilesFileIdGetTemporaryLink404ApplicationJSON;
}
