import { SpeakeasyBase } from "../../../internal/utils";
export declare class CutoffTime extends SpeakeasyBase {
    /**
     * Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    hour?: number;
    /**
     * Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    minute?: number;
    /**
     * Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required.
     */
    timezone?: string;
}
