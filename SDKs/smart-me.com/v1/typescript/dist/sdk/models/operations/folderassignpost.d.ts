import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FolderAssignPostRequest extends SpeakeasyBase {
    /**
     * The ID of the meter or folder that should be assign
     */
    source: string;
    /**
     * The ID of the meter or folder that should be the parent
     */
    target: string;
}
export declare class FolderAssignPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
