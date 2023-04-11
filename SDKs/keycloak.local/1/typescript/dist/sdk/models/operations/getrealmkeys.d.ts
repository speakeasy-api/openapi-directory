import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmKeysRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    keysMetadataRepresentation?: shared.KeysMetadataRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
