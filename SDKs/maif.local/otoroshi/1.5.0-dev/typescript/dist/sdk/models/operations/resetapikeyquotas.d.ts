import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetApiKeyQuotasSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ResetApiKeyQuotasRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class ResetApiKeyQuotasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    quotas?: shared.Quotas;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
