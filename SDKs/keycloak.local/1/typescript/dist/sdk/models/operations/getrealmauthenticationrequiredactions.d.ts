import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationRequiredActionsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationRequiredActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    requiredActionProviderRepresentations?: shared.RequiredActionProviderRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
