import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretRolesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this secret role.
     */
    id: number;
}
export declare class SecretsSecretRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
