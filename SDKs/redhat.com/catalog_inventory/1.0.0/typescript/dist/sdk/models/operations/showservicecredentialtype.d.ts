import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowServiceCredentialTypeRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowServiceCredentialTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * ServiceCredentialType info
     */
    serviceCredentialType?: shared.ServiceCredentialType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
