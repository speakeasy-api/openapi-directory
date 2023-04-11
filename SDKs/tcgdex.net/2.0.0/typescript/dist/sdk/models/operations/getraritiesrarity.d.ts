import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRaritiesRarityRequest extends SpeakeasyBase {
    rarity: string;
}
export declare class GetRaritiesRarityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the cards containing the specified rarity
     */
    stringEndpoint?: shared.StringEndpoint;
}
