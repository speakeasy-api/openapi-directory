import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGlossaryJsonRequest extends SpeakeasyBase {
    glossaryUploadRequest?: shared.GlossaryUploadRequest;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class CreateGlossaryJsonResponse extends SpeakeasyBase {
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
