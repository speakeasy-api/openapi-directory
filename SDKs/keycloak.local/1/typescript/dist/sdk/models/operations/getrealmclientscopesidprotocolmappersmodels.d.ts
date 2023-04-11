import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
