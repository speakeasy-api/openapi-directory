import { SpeakeasyBase } from "../../../internal/utils";
export declare class REPERTOIREcreatereponseEtatEtat extends SpeakeasyBase {
    /**
     * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
     */
    code: string;
    /**
     * Libellé associé au code retour.
     */
    message?: string;
    /**
     * repertoireId du repertoire crée.
     */
    repertoireId?: string;
}
