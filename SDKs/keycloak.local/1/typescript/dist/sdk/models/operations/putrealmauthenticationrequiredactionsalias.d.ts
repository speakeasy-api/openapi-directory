import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
    /**
     * JSON describing new state of required action
     */
    requiredActionProviderRepresentation: shared.RequiredActionProviderRepresentation;
    /**
     * Alias of required action
     */
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
