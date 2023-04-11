import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The CIS instruction object.
     */
    cisInstruction: shared.CisInstruction;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The sub contractors' unique identifier. E.g SUB001
     */
    subContractorId: string;
}
export declare class PostCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The link object.
     */
    link?: shared.Link;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
