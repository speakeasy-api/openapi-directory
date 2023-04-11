import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsUpdateRequestBody2Files3 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content?: string;
    /**
     * The new filename for the file.
     */
    filename?: string;
}
export declare class GistsUpdateRequestBody2Files2 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content?: string;
    /**
     * The new filename for the file.
     */
    filename: string;
}
export declare class GistsUpdateRequestBody2Files1 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content: string;
    /**
     * The new filename for the file.
     */
    filename?: string;
}
export declare class GistsUpdateRequestBody2 extends SpeakeasyBase {
    /**
     * The description of the gist.
     */
    description?: string;
    /**
     * The gist files to be updated, renamed, or deleted. Each `key` must match the current filename
     *
     * @remarks
     * (including extension) of the targeted gist file. For example: `hello.py`.
     *
     * To delete a file, set the whole file to null. For example: `hello.py : null`.
     */
    files: Record<string, any>;
}
export declare class GistsUpdateRequestBody1Files3 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content?: string;
    /**
     * The new filename for the file.
     */
    filename?: string;
}
export declare class GistsUpdateRequestBody1Files2 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content?: string;
    /**
     * The new filename for the file.
     */
    filename: string;
}
export declare class GistsUpdateRequestBody1Files1 extends SpeakeasyBase {
    /**
     * The new content of the file.
     */
    content: string;
    /**
     * The new filename for the file.
     */
    filename?: string;
}
export declare class GistsUpdateRequestBody1 extends SpeakeasyBase {
    /**
     * The description of the gist.
     */
    description: string;
    /**
     * The gist files to be updated, renamed, or deleted. Each `key` must match the current filename
     *
     * @remarks
     * (including extension) of the targeted gist file. For example: `hello.py`.
     *
     * To delete a file, set the whole file to null. For example: `hello.py : null`.
     */
    files?: Record<string, any>;
}
export declare class GistsUpdateRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The unique identifier of the gist.
     */
    gistId: string;
}
export declare class GistsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gistSimple?: shared.GistSimple;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
