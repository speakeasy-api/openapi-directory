import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FilesPatchRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The unique identifier of the file you wish to update.
     */
    fileId: string;
}
export declare class FilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
