import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddClientSecretSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddClientSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully added
     */
    clientCredentialsResponses?: shared.ClientCredentialsResponse[];
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
