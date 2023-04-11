import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The named port. For example: <"http", 80>.
 */
export declare class NamedPort extends SpeakeasyBase {
    /**
     * The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
     */
    name?: string;
    /**
     * The port number, which can be a value between 1 and 65535.
     */
    port?: number;
}
