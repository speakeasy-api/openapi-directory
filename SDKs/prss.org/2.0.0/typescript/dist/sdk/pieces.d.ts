import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Pieces define specific story or song level metadata within an episode and segment. For example, an 18 minute audio segment may be composed of multiple 2 or 3 minute pieces.
 */
export declare class Pieces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the piece with the given ID.
     */
    deleteApiV2PiecesId(req: operations.DeleteApiV2PiecesIdRequest, security: operations.DeleteApiV2PiecesIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2PiecesIdResponse>;
    /**
     * Returns the pieces matching the query parameters.
     */
    getApiV2Pieces(req: operations.GetApiV2PiecesRequest, security: operations.GetApiV2PiecesSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2PiecesResponse>;
    /**
     * Returns the piece matching the given ID.
     */
    getApiV2PiecesId(req: operations.GetApiV2PiecesIdRequest, security: operations.GetApiV2PiecesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2PiecesIdResponse>;
    /**
     * Create a new piece.
     */
    postApiV2Pieces(req: shared.PieceInput, security: operations.PostApiV2PiecesSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2PiecesResponse>;
}
