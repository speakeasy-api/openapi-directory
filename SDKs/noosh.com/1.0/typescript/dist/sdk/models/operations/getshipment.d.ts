import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShipmentRequest extends SpeakeasyBase {
    projectId: string;
    shipmentId: string;
    workgroupId: string;
}
export declare class GetShipmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    shipmentExpandVO?: shared.ShipmentExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
