import { SpeakeasyBase } from "../../../internal/utils";
export declare class LISTENOIREReponseEtatEtat extends SpeakeasyBase {
    /**
     * Doit valoir "OK"
     */
    listeNoire: string;
    /**
     * Numéro de téléphone à placer en liste noire. Format national Français ou international.
     */
    tel: string;
}
