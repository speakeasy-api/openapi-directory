import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Operations.WaitOperation.
 */
export declare class WaitOperationRequest extends SpeakeasyBase {
    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: string;
}
