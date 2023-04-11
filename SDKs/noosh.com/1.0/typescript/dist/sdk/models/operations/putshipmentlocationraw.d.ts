import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutShipmentLocationRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    locationId: string;
    projectId: string;
    shipmentId: string;
    workgroupId: string;
}
export declare class PutShipmentLocationRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Update successfully
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
