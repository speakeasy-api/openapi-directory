import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2CddriveFilesContentSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2CddriveFilesContentRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * Form data defining the file to create.
 */
export declare class PostApiV2CddriveFilesContentRequestBody extends SpeakeasyBase {
    /**
     * The file content being uploaded.
     */
    file?: PostApiV2CddriveFilesContentRequestBodyFile;
    /**
     * The name of the file, including extension.
     */
    name?: string;
    /**
     * The ID of the parent folder or 0 for the root folder.
     */
    parentId?: number;
}
export declare class PostApiV2CddriveFilesContentRequest extends SpeakeasyBase {
    /**
     * If present, the MD5 will be compared against the file received as a message integrity check.
     */
    contentMd5?: string;
    /**
     * Form data defining the file to create.
     */
    requestBody?: PostApiV2CddriveFilesContentRequestBody;
}
export declare class PostApiV2CddriveFilesContentResponse extends SpeakeasyBase {
    /**
     * The file was created successfully. The response contains the file metadata.
     */
    cdDriveFile?: shared.CDDriveFile;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
