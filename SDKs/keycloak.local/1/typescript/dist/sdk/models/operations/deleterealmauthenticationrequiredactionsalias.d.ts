import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
    /**
     * Alias of required action
     */
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
