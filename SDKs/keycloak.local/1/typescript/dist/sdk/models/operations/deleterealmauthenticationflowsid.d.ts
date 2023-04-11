import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
    /**
     * Flow id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
