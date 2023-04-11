import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmClientScopesId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
    id1: string;
    id2: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmClientScopesId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
