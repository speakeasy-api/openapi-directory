import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutShipmentLocationJsonRequest extends SpeakeasyBase {
    shipmentLocationPersistVO?: shared.ShipmentLocationPersistVO;
    locationId: string;
    projectId: string;
    shipmentId: string;
    workgroupId: string;
}
export declare class PutShipmentLocationJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Update successfully
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
