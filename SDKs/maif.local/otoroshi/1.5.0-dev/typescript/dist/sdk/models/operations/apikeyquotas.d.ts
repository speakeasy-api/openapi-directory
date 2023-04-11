import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeyQuotasSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ApiKeyQuotasRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class ApiKeyQuotasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    quotas?: shared.Quotas;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
