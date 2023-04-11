import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdScopeMappingsRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdScopeMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
