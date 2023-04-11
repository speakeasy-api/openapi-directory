import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
    protocolMapperRepresentation: shared.ProtocolMapperRepresentation;
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
