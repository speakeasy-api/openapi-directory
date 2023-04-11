import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretsListRequest extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    role?: string;
    roleId?: string;
    tag?: string;
}
export declare class SecretsSecretsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Secret[];
}
export declare class SecretsSecretsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    secretsSecretsList200ApplicationJSONObject?: SecretsSecretsList200ApplicationJSON;
}
