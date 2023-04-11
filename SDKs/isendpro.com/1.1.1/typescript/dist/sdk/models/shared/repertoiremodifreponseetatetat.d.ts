import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tableau de code retour. Si succès, un code retour distinct par numéro soumis.
 */
export declare class REPERTOIREmodifreponseEtatEtat extends SpeakeasyBase {
    /**
     * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
     */
    code: string;
    /**
     * Libellé associé au code retour.
     */
    message?: string;
    /**
     * repertoireId passé en argument lors de l'appel
     */
    repertoireId?: string;
    /**
     * Numéro de téléphone
     */
    tel?: string;
}
