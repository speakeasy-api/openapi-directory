import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
    alias: string;
    /**
     * Mapper id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
