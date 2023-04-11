import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SpotinsertionsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2SpotinsertionsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2SpotinsertionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view the spot insertion.
     */
    error?: shared.ErrorT;
    /**
     * The spot insertion with the given ID.
     */
    spotInsertion?: shared.SpotInsertion;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
