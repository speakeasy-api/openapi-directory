import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteFileRequest extends SpeakeasyBase {
    /**
     * The ID of the file to use for this request
     */
    fileId: string;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deleteFileResponse?: shared.DeleteFileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
