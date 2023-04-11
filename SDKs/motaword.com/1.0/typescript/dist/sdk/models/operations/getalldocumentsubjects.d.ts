import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllDocumentSubjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of subjects of all projects.
     */
    documentSubjects?: shared.DocumentSubjects[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
