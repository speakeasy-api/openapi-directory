import { SpeakeasyBase } from "../../../internal/utils";
/**
 * action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros
 */
export declare enum REPERTOIREmodifrequestRepertoireEditEnum {
    Add = "add",
    Del = "del"
}
/**
 * Requête de creation repertoire
 */
export declare class REPERTOIREmodifrequest extends SpeakeasyBase {
    /**
     * Noms des contact
     */
    champ1?: string[];
    /**
     * Champs I des contacts
     */
    champ10?: string[];
    /**
     * Champs J des contacts
     */
    champ11?: string[];
    /**
     * Champs K des contacts
     */
    champ12?: string[];
    /**
     * Champs L des contacts
     */
    champ13?: string[];
    /**
     * Champs M des contacts
     */
    champ14?: string[];
    /**
     * Champs N des contacts
     */
    champ15?: string[];
    /**
     * Champs O des contacts
     */
    champ16?: string[];
    /**
     * Champs P des contacts
     */
    champ17?: string[];
    /**
     * Champs Q des contacts
     */
    champ18?: string[];
    /**
     * Champs R des contacts
     */
    champ19?: string[];
    /**
     * Champs A des contacts
     */
    champ2?: string[];
    /**
     * Champs S des contacts
     */
    champ20?: string[];
    /**
     * Champs T des contacts
     */
    champ21?: string[];
    /**
     * Champs U des contacts
     */
    champ22?: string[];
    /**
     * Champs V des contacts
     */
    champ23?: string[];
    /**
     * Champs W des contacts
     */
    champ24?: string[];
    /**
     * Champs X des contacts
     */
    champ25?: string[];
    /**
     * Champs Y des contacts
     */
    champ26?: string[];
    /**
     * Champs Z des contacts
     */
    champ27?: string[];
    /**
     * Champs B des contacts
     */
    champ3?: string[];
    /**
     * Champs C des contacts
     */
    champ4?: string[];
    /**
     * Champs D des contacts
     */
    champ5?: string[];
    /**
     * Champs E des contacts
     */
    champ6?: string[];
    /**
     * Champs F des contacts
     */
    champ7?: string[];
    /**
     * Champs G des contacts
     */
    champ8?: string[];
    /**
     * Champs H des contacts
     */
    champ9?: string[];
    /**
     * Clé API
     */
    keyid: string;
    /**
     * liste des numéros des téléphone à ajouter ou supprimer
     */
    num: string[];
    /**
     * action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros
     */
    repertoireEdit: REPERTOIREmodifrequestRepertoireEditEnum;
    /**
     * repertoireId du répertoire cible
     */
    repertoireId: string;
}
