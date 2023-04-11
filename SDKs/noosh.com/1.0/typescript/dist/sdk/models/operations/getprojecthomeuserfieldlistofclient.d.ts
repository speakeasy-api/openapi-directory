import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectHomeUserFieldListOfClientRequest extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetProjectHomeUserFieldListOfClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    projectHomeUserFieldsListVO?: shared.ProjectHomeUserFieldsListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
