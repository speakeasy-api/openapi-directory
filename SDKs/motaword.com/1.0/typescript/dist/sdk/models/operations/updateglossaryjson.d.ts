import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlossaryJsonRequest extends SpeakeasyBase {
    glossaryUploadRequest?: shared.GlossaryUploadRequest;
    /**
     * Glossary ID
     */
    glossaryId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class UpdateGlossaryJsonResponse extends SpeakeasyBase {
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
