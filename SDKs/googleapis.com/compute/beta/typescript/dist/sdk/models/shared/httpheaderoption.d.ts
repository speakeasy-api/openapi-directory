import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification determining how headers are added to requests or responses.
 */
export declare class HttpHeaderOption extends SpeakeasyBase {
    /**
     * The name of the header.
     */
    headerName?: string;
    /**
     * The value of the header to add.
     */
    headerValue?: string;
    /**
     * If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header. The default value is false.
     */
    replace?: boolean;
}
