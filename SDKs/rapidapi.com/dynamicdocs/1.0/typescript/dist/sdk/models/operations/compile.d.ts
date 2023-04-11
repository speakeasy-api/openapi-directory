import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The latex-compiler parameter can take the following values:  pdflatex lualatex
 */
export declare enum CompileLatexCompilerEnum {
    Pdflatex = "pdflatex",
    Lualatex = "lualatex"
}
export declare class CompileRequest extends SpeakeasyBase {
    /**
     * Should be set to "application/json"
     */
    contentType: string;
    /**
     * Post the dynamic data for the template to compile the document PDF.
     */
    requestBody?: Record<string, any>;
    /**
     * The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required.
     */
    docFileName?: string;
    /**
     * The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document.
     */
    docUrlExpiresIn?: number;
    /**
     * The latex-compiler parameter can take the following values:  pdflatex lualatex
     */
    latexCompiler?: CompileLatexCompilerEnum;
    /**
     * The latex-runs is a numerical parameter and can take values of 1, 2 and 3.
     */
    latexRuns?: number;
    /**
     * The main-file-name is a string parameter which identifies the main file to compile.
     */
    mainFileName?: string;
    /**
     * The template-token is available in your template settings after publishing your template.
     */
    templateToken: string;
}
export declare class CompileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document Status URL Created
     */
    compile200ApplicationJSONObject?: Record<string, any>;
}
