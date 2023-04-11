import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An outage by the Snow Monkey on a service
 */
export declare class Outage extends SpeakeasyBase {
    /**
     * The service impacted by outage
     */
    descriptorId: string;
    /**
     * The name of service impacted by outage
     */
    descriptorName: string;
    /**
     * The duration of the outage
     */
    duration: number;
    /**
     * The end of the outage
     */
    until: string;
}
