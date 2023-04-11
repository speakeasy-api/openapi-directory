import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpecProductTypeListOfWorkgroupJsonRequest extends SpeakeasyBase {
    wgSpecPrdTypeRegPersistVO?: shared.WgSpecPrdTypeRegPersistVO;
    workgroupId: string;
}
export declare class PostSpecProductTypeListOfWorkgroupJsonResponse extends SpeakeasyBase {
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
