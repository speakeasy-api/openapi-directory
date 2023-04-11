import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsRequest extends SpeakeasyBase {
    clientRepresentation: shared.ClientRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
