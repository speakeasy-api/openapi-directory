import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2CddriveFoldersFolderIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2CddriveFoldersFolderIdRequest extends SpeakeasyBase {
    /**
     * The ID of the folder to get.
     */
    folderId: number;
    /**
     * Flag to indicate if the folder should be deleted if it has items inside of it.
     */
    recursive?: boolean;
}
export declare class DeleteApiV2CddriveFoldersFolderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
