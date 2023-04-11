import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsRequest extends SpeakeasyBase {
    /**
     * filter by clientId
     */
    clientId?: string;
    /**
     * the first result
     */
    first?: number;
    /**
     * the max results to return
     */
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * whether this is a search query or a getClientById query
     */
    search?: boolean;
    /**
     * filter clients that cannot be viewed in full by admin
     */
    viewableOnly?: boolean;
}
export declare class GetRealmClientsResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientRepresentations?: shared.ClientRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
