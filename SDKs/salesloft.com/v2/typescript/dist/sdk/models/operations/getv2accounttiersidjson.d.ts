import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2AccountTiersIdJsonRequest extends SpeakeasyBase {
    /**
     * Account Tier ID
     */
    id: string;
}
export declare class GetV2AccountTiersIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
