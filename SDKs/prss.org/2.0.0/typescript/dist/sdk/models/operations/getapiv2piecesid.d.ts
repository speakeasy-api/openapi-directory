import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2PiecesIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2PiecesIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2PiecesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed
     */
    error?: shared.ErrorT;
    /**
     * The piece with the given ID.
     */
    piece?: shared.Piece;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
