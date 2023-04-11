import { SpeakeasyBase } from "../../../internal/utils";
export declare class SMSReponseEtatEtat extends SpeakeasyBase {
    /**
     * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
     */
    code?: number;
    /**
     * Libellé associé au code de retour
     */
    message?: string;
    /**
     * Nombre de SMS longs facturés
     */
    smslong?: string;
    /**
     * Numero de téléphone concerné
     */
    tel?: string;
}
