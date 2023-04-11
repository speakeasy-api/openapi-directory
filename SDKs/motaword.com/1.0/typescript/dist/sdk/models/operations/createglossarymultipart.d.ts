import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGlossaryMultipartRequest extends SpeakeasyBase {
    glossaryUploadRequest1?: shared.GlossaryUploadRequest1;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class CreateGlossaryMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge
     */
    error?: shared.ErrorT;
    /**
     * Newly created glossary model.
     */
    glossary?: shared.Glossary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
