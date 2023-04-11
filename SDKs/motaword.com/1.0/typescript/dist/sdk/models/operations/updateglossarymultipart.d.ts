import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlossaryMultipartRequest extends SpeakeasyBase {
    glossaryUploadRequest1?: shared.GlossaryUploadRequest1;
    /**
     * Glossary ID
     */
    glossaryId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class UpdateGlossaryMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge
     */
    error?: shared.ErrorT;
    /**
     * Updated glossary model
     */
    glossary?: shared.Glossary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
