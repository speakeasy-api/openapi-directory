import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationPerClientConfigDescriptionRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationPerClientConfigDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmAuthenticationPerClientConfigDescription2XXApplicationJSONObject?: Record<string, any>;
}
