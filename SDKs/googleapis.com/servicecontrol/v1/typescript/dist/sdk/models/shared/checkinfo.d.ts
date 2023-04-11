import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerInfo } from "./consumerinfo";
/**
 * Contains additional information about the check operation.
 */
export declare class CheckInfo extends SpeakeasyBase {
    /**
     * `ConsumerInfo` provides information about the consumer.
     */
    consumerInfo?: ConsumerInfo;
    /**
     * A list of fields and label keys that are ignored by the server. The client doesn't need to send them for following requests to improve performance and allow better aggregation.
     */
    unusedArguments?: string[];
}
