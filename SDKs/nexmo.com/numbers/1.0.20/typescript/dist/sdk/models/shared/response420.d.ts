import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action failed
 */
export declare class Response420 extends SpeakeasyBase {
    /**
     * The status code of the response. `200` indicates a successful request.
     */
    errorCode?: string;
    /**
     * More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number.
     */
    errorCodeLabel?: string;
}
