import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreditResponseEtat extends SpeakeasyBase {
    /**
     * Montant du crédit restant
     */
    credit?: number;
    /**
     * Equivalence du crédit en nombre de SMS vers la France Métropolitaine.
     */
    quantite?: string;
}
