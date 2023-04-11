import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadGlobalGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlossaryNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Glossary file streamed.
     */
    downloadGlobalGlossary200ApplicationJSONString?: string;
}
