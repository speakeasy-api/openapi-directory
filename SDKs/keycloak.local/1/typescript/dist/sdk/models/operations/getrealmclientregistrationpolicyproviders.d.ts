import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientRegistrationPolicyProvidersRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientRegistrationPolicyProvidersResponse extends SpeakeasyBase {
    /**
     * success
     */
    componentTypeRepresentations?: shared.ComponentTypeRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
