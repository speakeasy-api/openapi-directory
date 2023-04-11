import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A claim event describes an event that either was a filed claim or would have warranted a claim if the customer had coverage at the time. `claim_event` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).
 */
export declare class ClaimEventV1 extends SpeakeasyBase {
    amount: number;
    date: Date;
    description?: string;
}
