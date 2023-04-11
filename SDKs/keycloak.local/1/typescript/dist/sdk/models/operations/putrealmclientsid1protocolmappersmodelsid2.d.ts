import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
    protocolMapperRepresentation: shared.ProtocolMapperRepresentation;
    id1: string;
    id2: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
