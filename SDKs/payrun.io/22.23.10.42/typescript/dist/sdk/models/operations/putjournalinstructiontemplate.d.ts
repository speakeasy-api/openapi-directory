import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutJournalInstructionTemplateRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The journal instruction unique identifier. E.g JI001
     */
    journalInstructionId: string;
}
export declare class PutJournalInstructionTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The journal instruction object.
     */
    journalInstruction?: shared.JournalInstruction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
