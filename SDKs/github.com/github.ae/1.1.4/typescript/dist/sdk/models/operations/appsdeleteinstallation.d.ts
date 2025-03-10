import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsDeleteInstallationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the installation.
     */
    installationId: number;
}
export declare class AppsDeleteInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
