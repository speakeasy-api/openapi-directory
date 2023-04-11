import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePersonalAccessTokenRequest extends SpeakeasyBase {
    tokenId: number;
}
export declare class EnterpriseAdminDeletePersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
