import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ResetApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key group id
     */
    groupId: string;
}
export declare class ResetApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    quotas?: shared.Quotas;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
