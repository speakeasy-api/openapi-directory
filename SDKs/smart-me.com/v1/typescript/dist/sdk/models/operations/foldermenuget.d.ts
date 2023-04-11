import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FolderMenuGetRequest extends SpeakeasyBase {
    /**
     * (optional) Filter for the folders and meters:
     *
     * @remarks
     *             all: load everything
     *             assigned: load only folders and meters that are assigend to a folder
     *             unassigend: load only meters that are not assigend to a folder
     *             user: load only folder and all users assigned to this folders
     *             subuserlist: load all subusers as a list
     */
    filter?: string;
}
export declare class FolderMenuGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    folderMenuConfiguration?: shared.FolderMenuConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
