import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCisLineFromSubContractorRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The CIS line unique identifier. E.g. CISLN001
     */
    cisLineId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The sub contractors' unique identifier. E.g SUB001
     */
    subContractorId: string;
}
export declare class GetCisLineFromSubContractorResponse extends SpeakeasyBase {
    /**
     * The cis line object.
     */
    cisLine?: shared.CisLine;
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
