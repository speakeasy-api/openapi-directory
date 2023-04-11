import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Imideate response for long running api call.
 *
 * @remarks
 *
 */
export declare class StatusDTO extends SpeakeasyBase {
    /**
     * Reference id for status endpoint
     *
     * @remarks
     *
     */
    messageId?: string;
    /**
     * Status of API Call
     *
     * @remarks
     *
     */
    statusText?: string;
    /**
     * Relative url for stauts check
     *
     * @remarks
     *
     */
    url?: string;
}
