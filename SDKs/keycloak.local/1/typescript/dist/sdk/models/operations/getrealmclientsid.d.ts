import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdRequest extends SpeakeasyBase {
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
