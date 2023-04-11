import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdFederatedIdentityRequest extends SpeakeasyBase {
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmUsersIdFederatedIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    federatedIdentityRepresentations?: shared.FederatedIdentityRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
