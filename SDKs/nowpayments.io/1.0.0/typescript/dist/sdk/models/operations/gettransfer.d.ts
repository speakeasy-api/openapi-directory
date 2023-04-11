import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransferRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetTransfer200ApplicationJSONResult extends SpeakeasyBase {
    amount?: string;
    createdAt?: string;
    currency?: string;
    fromSubId?: string;
    id?: string;
    status?: string;
    toSubId?: string;
    updatedAt?: string;
}
/**
 * 200
 */
export declare class GetTransfer200ApplicationJSON extends SpeakeasyBase {
    result?: GetTransfer200ApplicationJSONResult;
}
export declare class GetTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getTransfer200ApplicationJSONObject?: GetTransfer200ApplicationJSON;
}
