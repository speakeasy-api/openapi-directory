import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostShipmentJsonRequest extends SpeakeasyBase {
    shipmentLocationPostPersistVO?: shared.ShipmentLocationPostPersistVO;
    projectId: string;
    workgroupId: string;
}
export declare class PostShipmentJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful created
     */
    shipmentLocationsPOSTResultVO?: shared.ShipmentLocationsPOSTResultVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
