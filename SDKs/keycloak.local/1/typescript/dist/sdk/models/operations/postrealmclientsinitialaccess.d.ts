import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsInitialAccessRequest extends SpeakeasyBase {
    clientInitialAccessCreatePresentation: shared.ClientInitialAccessCreatePresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsInitialAccessResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientInitialAccessPresentation?: shared.ClientInitialAccessPresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
