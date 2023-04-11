import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Fetch cards globally
 */
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fetch the list of cards
     *
     * @remarks
     * desc
     */
    cards(config?: AxiosRequestConfig): Promise<operations.CardsResponse>;
    /**
     * Finds Card by Global ID
     *
     * @remarks
     * Find a defined card thatusing its global id
     */
    findPetsByTags(req: operations.FindPetsByTagsRequest, config?: AxiosRequestConfig): Promise<operations.FindPetsByTagsResponse>;
    getSetsSetCardLocalId(req: operations.GetSetsSetCardLocalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetsSetCardLocalIdResponse>;
}
