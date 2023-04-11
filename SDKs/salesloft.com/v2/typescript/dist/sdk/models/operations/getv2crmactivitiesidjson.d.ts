import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CrmActivitiesIdJsonRequest extends SpeakeasyBase {
    /**
     * Crm activity ID
     */
    id: string;
}
export declare class GetV2CrmActivitiesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
