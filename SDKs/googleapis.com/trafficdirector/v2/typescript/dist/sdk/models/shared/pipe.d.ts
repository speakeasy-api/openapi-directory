import { SpeakeasyBase } from "../../../internal/utils";
export declare class Pipe extends SpeakeasyBase {
    /**
     * The mode for the Pipe. Not applicable for abstract sockets.
     */
    mode?: number;
    /**
     * Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux.
     */
    path?: string;
}
