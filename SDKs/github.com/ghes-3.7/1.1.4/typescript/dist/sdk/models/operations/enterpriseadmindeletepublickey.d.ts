import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePublicKeyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the key.
     */
    keyIds: string;
}
export declare class EnterpriseAdminDeletePublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
