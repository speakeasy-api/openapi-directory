import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretRolesUpdateRequest extends SpeakeasyBase {
    secretRoleInput: shared.SecretRoleInput;
    /**
     * A unique integer value identifying this secret role.
     */
    id: number;
}
export declare class SecretsSecretRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
