import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkgroupListRequest extends SpeakeasyBase {
    /**
     * Workgroup Name
     */
    workgroupName?: string;
    /**
     * 1000001 for Buyer, 1000002 for supplier, 1000003 for agent, 1000004 for Broker/Outsourcer and 1000005 for Partner
     */
    workgroupTypes?: string[];
}
export declare class GetWorkgroupListResponse extends SpeakeasyBase {
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
    workgroupListVO?: shared.WorkgroupListVO;
}
