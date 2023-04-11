import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2CddriveFoldersFolderIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2CddriveFoldersFolderIdRequest extends SpeakeasyBase {
    /**
     * The ID of the folder to get.
     */
    folderId: number;
}
export declare class GetApiV2CddriveFoldersFolderIdResponse extends SpeakeasyBase {
    /**
     * The folder information.
     */
    cdDriveFolder?: shared.CDDriveFolder;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
