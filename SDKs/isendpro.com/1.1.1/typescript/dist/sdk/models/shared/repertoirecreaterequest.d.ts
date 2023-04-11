import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action à réaliser doit valoir "create" ici.
 */
export declare enum REPERTOIREcreaterequestRepertoireEditEnum {
    Create = "create"
}
/**
 * Creation repertoire
 */
export declare class REPERTOIREcreaterequest extends SpeakeasyBase {
    /**
     * Clé API
     */
    keyid: string;
    /**
     * Action à réaliser doit valoir "create" ici.
     */
    repertoireEdit: REPERTOIREcreaterequestRepertoireEditEnum;
    /**
     * Nom du répertoire (libellé) à créer
     */
    repertoireNom: string;
}
