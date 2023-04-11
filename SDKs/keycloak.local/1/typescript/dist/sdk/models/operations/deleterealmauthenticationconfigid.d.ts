import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
    /**
     * Configuration id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
