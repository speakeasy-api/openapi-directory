import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteApiKeyRequest extends SpeakeasyBase {
    /**
     * the api key id
     */
    clientId: string;
    /**
     * The api key service id
     */
    serviceId: string;
}
export declare class DeleteApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
