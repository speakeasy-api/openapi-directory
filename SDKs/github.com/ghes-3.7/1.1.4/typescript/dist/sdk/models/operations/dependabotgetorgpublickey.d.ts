import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DependabotGetOrgPublicKeyRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class DependabotGetOrgPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    dependabotPublicKey?: shared.DependabotPublicKey;
}
