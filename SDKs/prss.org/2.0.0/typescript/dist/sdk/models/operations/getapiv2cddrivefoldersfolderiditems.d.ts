import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2CddriveFoldersFolderIdItemsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2CddriveFoldersFolderIdItemsRequest extends SpeakeasyBase {
    /**
     * The ID of the folder to get. Folder ID 0 represents the uppermost CD drive folder.
     */
    folderId: number;
    /**
     * The maximum number of items to return in the response.
     */
    limit?: number;
    /**
     * The offset into the items to begin the response.
     */
    offset?: number;
}
/**
 * The folder information.
 */
export declare class GetApiV2CddriveFoldersFolderIdItems200ApplicationJSON extends SpeakeasyBase {
    /**
     * The item instances.
     */
    entries?: shared.CDDriveItem[];
    /**
     * The maximum number of items to return.
     */
    limit?: number;
    /**
     * The start offset into the items.
     */
    offset?: number;
    /**
     * The total number of entries available.
     */
    totalCount?: number;
}
export declare class GetApiV2CddriveFoldersFolderIdItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The folder information.
     */
    getApiV2CddriveFoldersFolderIdItems200ApplicationJSONObject?: GetApiV2CddriveFoldersFolderIdItems200ApplicationJSON;
}
