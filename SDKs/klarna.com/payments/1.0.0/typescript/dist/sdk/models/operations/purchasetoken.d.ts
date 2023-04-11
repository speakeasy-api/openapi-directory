import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PurchaseTokenRequest extends SpeakeasyBase {
    authorizationToken: string;
    customerTokenCreationRequest?: shared.CustomerTokenCreationRequest;
}
export declare class PurchaseTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * We were unable to create a customer token with the provided data. Some field constraint was violated.
     */
    errorV2?: shared.ErrorV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token was successfully created.
     */
    customerTokenCreationResponse?: shared.CustomerTokenCreationResponse;
}
