import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFilesResponse?: shared.ListFilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
