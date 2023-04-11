import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpecProductTypeListOfWorkgroupRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    workgroupId: string;
}
export declare class PostSpecProductTypeListOfWorkgroupRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful created
     */
    wgSpecPrdTypeRegPersistVO?: shared.WgSpecPrdTypeRegPersistVO;
}
