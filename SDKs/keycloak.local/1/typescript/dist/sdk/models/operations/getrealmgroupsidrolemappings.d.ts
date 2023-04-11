import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsIdRoleMappingsRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
