import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2PiecesSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2PiecesRequest extends SpeakeasyBase {
    /**
     * The ID of the episode that owns the piece.
     */
    episodeId: number;
}
export declare class GetApiV2PiecesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The pieces matching the query parameters
     */
    pieces?: shared.Piece[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
