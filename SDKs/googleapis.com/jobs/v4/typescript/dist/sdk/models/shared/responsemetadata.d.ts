import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information returned to client, such as debugging information.
 */
export declare class ResponseMetadata extends SpeakeasyBase {
    /**
     * A unique id associated with this call. This id is logged for tracking purposes.
     */
    requestId?: string;
}
