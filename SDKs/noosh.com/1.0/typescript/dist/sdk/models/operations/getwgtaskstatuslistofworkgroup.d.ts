import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWgTaskStatusListOfWorkgroupRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetWgTaskStatusListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    wgTaskStatusListVO?: shared.WgTaskStatusListVO;
}
