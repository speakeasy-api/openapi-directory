import { SpeakeasyBase } from "../../../internal/utils";
/**
 * action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /
 */
export declare enum SubaccountRequestSubAccountEditEnum {
    SetPrice = "setPrice",
    AddCredit = "addCredit",
    SetRestriction = "setRestriction"
}
export declare enum SubaccountRequestSubAccountRestrictionStopEnum {
    Zero = "0",
    One = "1"
}
export declare enum SubaccountRequestSubAccountRestrictionTimeEnum {
    Zero = "0",
    One = "1"
}
/**
 * edit sub account request
 */
export declare class SubaccountRequest extends SpeakeasyBase {
    /**
     * Clé API
     */
    keyid: string;
    /**
     * montant du crédit à ajouter
     */
    subAccountAddCredit?: string;
    subAccountCountryCode?: string;
    /**
     * action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /
     */
    subAccountEdit: SubaccountRequestSubAccountEditEnum;
    /**
     * keyid du sous-compte
     */
    subAccountKeyId?: string;
    subAccountPrice?: string;
    subAccountRestrictionStop?: SubaccountRequestSubAccountRestrictionStopEnum;
    subAccountRestrictionTime?: SubaccountRequestSubAccountRestrictionTimeEnum;
}
