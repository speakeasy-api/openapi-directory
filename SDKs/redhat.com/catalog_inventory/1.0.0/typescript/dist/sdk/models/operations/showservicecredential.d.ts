import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowServiceCredentialRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowServiceCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * ServiceCredential info
     */
    serviceCredential?: shared.ServiceCredential;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
