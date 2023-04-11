import { SpeakeasyBase } from "../../../internal/utils";
import { EntryPointParameter } from "./entrypointparameter";
/**
 * The HTTP method used by the EntryPoint.
 */
export declare enum EntryPointHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class EntryPoint extends SpeakeasyBase {
    /**
     * The supported MIME type(s) for an EntryPoint response.
     */
    contentTypes: string[];
    /**
     * A short description of the action. Optional - may be null.
     */
    description: string;
    /**
     * The supported MIME type(s) for an EntryPoint request. Null if not applicable.
     */
    encodingTypes: string[];
    /**
     * The HTTP method used by the EntryPoint.
     */
    httpMethod: EntryPointHttpMethodEnum;
    /**
     * A word or short phrase to be used as the action's display name. Optional - may be null.
     */
    name: string;
    /**
     * Descriptions of the EntryPoint parameters. Null if not applicable.
     */
    parameters: EntryPointParameter[];
    /**
     * The EntryPoint URL. It will be non-null if url_template is null.
     */
    url: string;
    /**
     * The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.
     */
    urlTemplate: string;
}
