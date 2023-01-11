import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAutoCollectionEnum } from "./accountautocollectionenum";
import { Plan } from "./plan";
import { AccountStatusEnum } from "./accountstatusenum";
export declare class Account extends SpeakeasyBase {
    autoCollection?: AccountAutoCollectionEnum;
    balance?: number;
    balanceCurrencyCode?: string;
    freeTargetQuantity?: number;
    hasUsedTrial?: boolean;
    heroku?: boolean;
    nextBillingAt?: Date;
    plan?: Plan;
    planTargetQuantity?: number;
    poolSize?: number;
    status?: AccountStatusEnum;
    trialEnd?: Date;
}
