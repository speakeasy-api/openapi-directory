import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorData extends SpeakeasyBase {
    /**
     * Object containing typed error data specific to the API
     */
    content?: Record<string, any>;
    /**
     * The description of the error data content
     */
    description?: string;
}
