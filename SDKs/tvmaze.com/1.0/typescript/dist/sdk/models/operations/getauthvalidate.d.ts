import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The supplied credentials are valid
 */
export declare class GetAuthValidate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none
     */
    premium?: number;
}
export declare class GetAuthValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The supplied credentials are valid
     */
    getAuthValidate200ApplicationJSONObject?: GetAuthValidate200ApplicationJSON;
}
