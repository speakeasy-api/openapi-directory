import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsInitialAccessRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientsInitialAccessResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientInitialAccessPresentations?: shared.ClientInitialAccessPresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
