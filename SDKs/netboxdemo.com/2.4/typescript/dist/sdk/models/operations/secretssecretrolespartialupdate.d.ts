import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretRolesPartialUpdateRequest extends SpeakeasyBase {
    secretRoleInput: shared.SecretRoleInput;
    /**
     * A unique integer value identifying this secret role.
     */
    id: number;
}
export declare class SecretsSecretRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
