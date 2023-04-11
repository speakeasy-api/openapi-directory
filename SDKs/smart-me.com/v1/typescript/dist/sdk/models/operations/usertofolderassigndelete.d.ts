import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserToFolderAssignDeleteRequest extends SpeakeasyBase {
    /**
     * The ID of the user that should be de-assign
     */
    source: string;
    /**
     * The ID of the folder
     */
    target: string;
}
export declare class UserToFolderAssignDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
