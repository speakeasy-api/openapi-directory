import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubaccountResponseEtatEtat extends SpeakeasyBase {
    code?: string;
    message?: string;
    subAccountId?: string;
    subAccountKeyid?: string;
}
export declare class SubaccountResponseEtat extends SpeakeasyBase {
    etat?: SubaccountResponseEtatEtat[];
}
/**
 * Reponse OK
 */
export declare class SubaccountResponse extends SpeakeasyBase {
    etat?: SubaccountResponseEtat;
}
