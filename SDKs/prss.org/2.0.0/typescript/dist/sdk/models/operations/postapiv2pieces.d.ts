import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2PiecesSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2PiecesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If the request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    /**
     * The created piece with fields populated.
     */
    piece?: shared.Piece;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
