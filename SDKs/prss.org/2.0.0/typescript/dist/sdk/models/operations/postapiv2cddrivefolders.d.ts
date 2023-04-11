import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2CddriveFoldersSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2CddriveFoldersRequestBody extends SpeakeasyBase {
    /**
     * the name of the folder
     */
    name?: string;
    /**
     * The ID of the parent folder or 0 for the root folder.
     */
    parentId?: number;
}
export declare class PostApiV2CddriveFoldersResponse extends SpeakeasyBase {
    /**
     * The folder information.
     */
    cdDriveFolder?: shared.CDDriveFolder;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
