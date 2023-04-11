import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretsSecretsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this secret.
     */
    id: number;
}
export declare class SecretsSecretsReadResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
