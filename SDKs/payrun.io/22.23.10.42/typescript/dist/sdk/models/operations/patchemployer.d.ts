import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchEmployerRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employer object.
     */
    employer: shared.Employer;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
}
export declare class PatchEmployerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The employer object.
     */
    employer?: shared.Employer;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
