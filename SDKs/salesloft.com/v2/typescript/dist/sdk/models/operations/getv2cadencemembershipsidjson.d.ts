import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CadenceMembershipsIdJsonRequest extends SpeakeasyBase {
    /**
     * CadenceMembership ID
     */
    id: string;
}
export declare class GetV2CadenceMembershipsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
