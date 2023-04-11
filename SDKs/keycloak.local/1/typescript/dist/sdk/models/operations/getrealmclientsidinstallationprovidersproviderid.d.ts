import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdInstallationProvidersProviderIdRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    providerId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdInstallationProvidersProviderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
