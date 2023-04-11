import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of a single rules file.
 */
export declare class RulesFile extends SpeakeasyBase {
    /**
     * The text content of the rules that needs to be converted.
     */
    rulesContent?: string;
    /**
     * The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it.
     */
    rulesSourceFilename?: string;
}
