import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErreurEtatEtat extends SpeakeasyBase {
    /**
     * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
     */
    code?: string;
    /**
     * Libellé associé au code de retour
     */
    message?: string;
}
