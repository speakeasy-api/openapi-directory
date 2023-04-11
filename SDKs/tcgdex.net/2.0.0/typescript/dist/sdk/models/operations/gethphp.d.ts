import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHpHpRequest extends SpeakeasyBase {
    hp: string;
}
export declare class GetHpHpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the Pokémon cards containing specified number of HP
     */
    stringEndpoint?: shared.StringEndpoint;
}
