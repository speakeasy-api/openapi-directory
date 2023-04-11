import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest extends SpeakeasyBase {
    /**
     * Alias of required action
     */
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
