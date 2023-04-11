import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FolderSettingsGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class FolderSettingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    folderSettings?: shared.FolderSettings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
