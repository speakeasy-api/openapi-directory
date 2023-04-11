import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDexIdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List all possible Pokemon(s) Pokédex Ids that appeared in the TCG
     */
    getDexIds200ApplicationJSONStrings?: string[];
}
