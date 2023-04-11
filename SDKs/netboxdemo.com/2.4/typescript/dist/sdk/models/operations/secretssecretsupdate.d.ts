import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretsUpdateRequest extends SpeakeasyBase {
    writableSecretInput: shared.WritableSecretInput;
    /**
     * A unique integer value identifying this secret.
     */
    id: number;
}
export declare class SecretsSecretsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
