import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FolderSettingsPostFormRequest extends SpeakeasyBase {
    /**
     * The folder or meter data
     */
    folderSettings: shared.FolderSettings;
    /**
     * The ID of the folder or meter to edit. Use and empty ID to add a new folder
     */
    id: string;
}
export declare class FolderSettingsPostFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    folderMenuItem?: shared.FolderMenuItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
