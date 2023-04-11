import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTokenIdRequest extends SpeakeasyBase {
    /**
     * Token symbol
     */
    tokensymbol: string;
}
export declare class TestnetGetTokenIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.
     */
    getTokenIdResponse?: shared.GetTokenIdResponse;
}
