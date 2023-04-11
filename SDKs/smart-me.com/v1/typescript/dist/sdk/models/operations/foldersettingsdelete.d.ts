import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FolderSettingsDeleteRequest extends SpeakeasyBase {
    /**
     * The ID of the folder
     */
    id: string;
}
export declare class FolderSettingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
