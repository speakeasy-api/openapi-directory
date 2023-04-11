import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmClientScopesIdRequest extends SpeakeasyBase {
    /**
     * id of client scope (not name)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmClientScopesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
