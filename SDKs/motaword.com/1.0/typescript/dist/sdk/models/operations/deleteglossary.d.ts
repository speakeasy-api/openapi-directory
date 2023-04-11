import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGlossaryRequest extends SpeakeasyBase {
    /**
     * Glossary ID
     */
    glossaryId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class DeleteGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlossaryNotFound
     */
    error?: shared.ErrorT;
    /**
     * Glossary deleted successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
