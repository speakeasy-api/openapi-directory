import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCisLineTypeFromEmployerRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The CIS line type unique identifier. E.g. TYPEA
     */
    cisLineTypeId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
}
export declare class GetCisLineTypeFromEmployerResponse extends SpeakeasyBase {
    /**
     * The cis line type object.
     */
    cisLineType?: shared.CisLineType;
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
