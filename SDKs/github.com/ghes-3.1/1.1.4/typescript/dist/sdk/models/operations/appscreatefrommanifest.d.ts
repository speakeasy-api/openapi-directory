import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsCreateFromManifestRequest extends SpeakeasyBase {
    code: string;
}
export declare class AppsCreateFromManifestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    gitHubApp?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
