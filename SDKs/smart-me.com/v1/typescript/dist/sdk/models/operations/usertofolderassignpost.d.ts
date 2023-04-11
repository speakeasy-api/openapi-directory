import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserToFolderAssignPostRequest extends SpeakeasyBase {
    /**
     * The ID of the old folder (in case of a drag and drop to a new folder)
     */
    oldFolder: string;
    /**
     * The ID of the user that should be assign
     */
    source: string;
    /**
     * The ID of the folder that should be the parent
     */
    target: string;
}
export declare class UserToFolderAssignPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
