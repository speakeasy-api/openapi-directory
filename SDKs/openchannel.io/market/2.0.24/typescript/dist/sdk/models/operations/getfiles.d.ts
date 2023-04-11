import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFilesRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return per page
     */
    limit?: number;
    /**
     * The result set page number to be returned
     */
    pageNumber?: number;
    /**
     * A query document. Example: {'name':'file.txt'} matches all the files that have the name 'file.txt'
     */
    query?: string;
    /**
     * A sort document. Example: {'name':1} sorts the results by name in ascending order
     */
    sort?: string;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
