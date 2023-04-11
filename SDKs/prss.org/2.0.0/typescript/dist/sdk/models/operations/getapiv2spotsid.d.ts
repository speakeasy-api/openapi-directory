import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SpotsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2SpotsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2SpotsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view the spot.
     */
    error?: shared.ErrorT;
    /**
     * The spot with the given ID.
     */
    spot?: shared.Spot;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
