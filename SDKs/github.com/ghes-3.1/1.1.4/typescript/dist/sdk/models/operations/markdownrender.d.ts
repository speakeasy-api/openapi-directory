import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The rendering mode. Can be either `markdown` or `gfm`.
 */
export declare enum MarkdownRenderRequestBodyModeEnum {
    Markdown = "markdown",
    Gfm = "gfm"
}
export declare class MarkdownRenderRequestBody extends SpeakeasyBase {
    /**
     * The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.
     */
    context?: string;
    /**
     * The rendering mode. Can be either `markdown` or `gfm`.
     */
    mode?: MarkdownRenderRequestBodyModeEnum;
    /**
     * The Markdown text to render in HTML.
     */
    text: string;
}
export declare class MarkdownRenderResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    markdownRender200TextHTMLString?: string;
}
