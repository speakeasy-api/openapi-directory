import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadGlossaryRequest extends SpeakeasyBase {
    /**
     * Glossary ID
     */
    glossaryId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class DownloadGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlossaryNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Glossary streamed
     */
    downloadGlossary200ApplicationJSONString?: string;
}
