import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsUnsuspendInstallationRequest extends SpeakeasyBase {
    /**
     * installation_id parameter
     */
    installationId: number;
}
export declare class AppsUnsuspendInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
