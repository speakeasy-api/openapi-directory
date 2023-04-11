import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Render GitHub flavored markdown
 */
export declare class Markdown {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Render a Markdown document
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/markdown#render-a-markdown-document} - API method documentation
     */
    markdownRender(req: operations.MarkdownRenderRequestBody, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderResponse>;
    /**
     * Render a Markdown document in raw mode
     *
     * @remarks
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/markdown#render-a-markdown-document-in-raw-mode} - API method documentation
     */
    markdownRenderRaw(req: string, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderRawResponse>;
}
