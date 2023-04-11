import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMeFavoritesIdsSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeFavoritesIdsRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
}
export declare class GetMeFavoritesIdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
