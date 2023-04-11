import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FolderGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class FolderGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    folderData?: shared.FolderData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
