import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGlossaryRequest extends SpeakeasyBase {
    /**
     * Glossary ID
     */
    glossaryId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlossaryNotFound
     */
    error?: shared.ErrorT;
    /**
     * Glossary model
     */
    glossary?: shared.Glossary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
