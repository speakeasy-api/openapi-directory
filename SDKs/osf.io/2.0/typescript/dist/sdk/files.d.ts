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
     * Retrieve a file
     *
     * @remarks
     * Retrieves the details of a file (or folder)
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * ### Waterbutler API actions
     *
     * Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).
     *
     * #### Download (files)
     *
     * To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.
     *
     * #### Create Subfolder (folders)
     *
     * You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.
     *
     * #### Upload New File (folders)
     *
     *
     *   To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.
     *
     *
     * #### Update Existing File (file)
     *
     * To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.
     *
     * #### Rename (files, folders)
     *
     * To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.
     *
     * #### Move & Copy (files, folders)
     *
     * Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
     * Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
     * If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.
     *
     * #### Delete (file, folders)
     *
     * To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.
     */
    filesDetail(req: operations.FilesDetailRequest, config?: AxiosRequestConfig): Promise<operations.FilesDetailResponse>;
    /**
     * Update a file
     *
     * @remarks
     * Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * #### Returns
     * Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.
     *
     * If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    filesPatch(req: operations.FilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.FilesPatchResponse>;
    /**
     * Retrieve a file version
     *
     * @remarks
     * Retrieves the details of a file version
     * #### Returns
     *
     * Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    filesVersionDetail(req: operations.FilesVersionDetailRequest, config?: AxiosRequestConfig): Promise<operations.FilesVersionDetailResponse>;
    /**
     * List all file versions
     *
     * @remarks
     *
     * A paginated list of all file versions.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    filesVersions(req: operations.FilesVersionsRequest, config?: AxiosRequestConfig): Promise<operations.FilesVersionsResponse>;
}
