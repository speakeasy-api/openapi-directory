import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SecretsSecretRolesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this secret role.
     */
    id: number;
}
export declare class SecretsSecretRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
