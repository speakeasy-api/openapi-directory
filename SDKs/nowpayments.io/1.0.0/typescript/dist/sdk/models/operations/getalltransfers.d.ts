import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllTransfersRequest extends SpeakeasyBase {
    /**
     * int or array of int (optional)
     */
    id?: string;
    /**
     * (optional) default 10
     */
    limit?: string;
    /**
     * (optional) default 0
     */
    offset?: string;
    /**
     * ASC / DESC (optional) default ASC
     */
    order?: string;
    /**
     * string or array of string
     *
     * @remarks
     * "WAITING"/"CREATED"/"FINISHED"/"REJECTED"
     * (optional)
     */
    status?: string;
}
export declare class GetAllTransfers200ApplicationJSONResult extends SpeakeasyBase {
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
export declare class GetAllTransfers200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    result?: GetAllTransfers200ApplicationJSONResult[];
}
export declare class GetAllTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getAllTransfers200ApplicationJSONObject?: GetAllTransfers200ApplicationJSON;
}
