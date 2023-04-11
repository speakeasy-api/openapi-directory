import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientScopesIdScopeMappingsRequest extends SpeakeasyBase {
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientScopesIdScopeMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
