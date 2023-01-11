import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * commentsDelete - Delete a comment
     *
     * Deletes a comment. This action can be undone by setting deleted to False in a comment update request.
     * #### Returns
     * If the request is successful, no content is returned.
     *
     * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    commentsDelete(req: operations.CommentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CommentsDeleteResponse>;
    /**
     * commentsPut - Update a comment
     *
     * Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * #### Returns
     * Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.
     *
     * If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    commentsPut(req: operations.CommentsPutRequest, config?: AxiosRequestConfig): Promise<operations.CommentsPutResponse>;
    /**
     * commentsRead - Retrieve a comment
     *
     * Retrieves the details of a comment
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    commentsRead(req: operations.CommentsReadRequest, config?: AxiosRequestConfig): Promise<operations.CommentsReadResponse>;
}
