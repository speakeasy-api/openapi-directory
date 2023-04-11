import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIllustratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get all the Pokémon cards illustrators
     */
    getIllustrators200ApplicationJSONStrings?: string[];
}
