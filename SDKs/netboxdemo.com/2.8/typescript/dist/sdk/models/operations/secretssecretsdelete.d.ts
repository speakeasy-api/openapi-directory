import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SecretsSecretsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this secret.
     */
    id: number;
}
export declare class SecretsSecretsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
