import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /files/{file_id}
     *
     * @remarks
     * ### Get details for a file.
     *
     * Retrieve the metadata for an individual file.
     */
    getFilesFileId(req: operations.GetFilesFileIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesFileIdResponse>;
    /**
     * /files/{file_id}/get_temporary_link
     *
     * @remarks
     * ### Get a temporary link to stream the contents of a file
     *
     * Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.
     *
     * <!-- theme: info -->
     *
     * > #### The Link URL should not be displayed on your front-end
     * > Since these links are temporary, Herald encourages you to not display the URL on your front end.
     */
    postFilesFileIdGetTemporaryLink(req: operations.PostFilesFileIdGetTemporaryLinkRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesFileIdGetTemporaryLinkResponse>;
}
