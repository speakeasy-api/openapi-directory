import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
    /**
     * Alias of required action
     */
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    requiredActionProviderRepresentation?: shared.RequiredActionProviderRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
