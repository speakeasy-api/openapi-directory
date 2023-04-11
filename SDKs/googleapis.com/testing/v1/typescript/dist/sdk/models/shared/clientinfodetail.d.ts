import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
 */
export declare class ClientInfoDetail extends SpeakeasyBase {
    /**
     * Required. The key of detailed client information.
     */
    key?: string;
    /**
     * Required. The value of detailed client information.
     */
    value?: string;
}
