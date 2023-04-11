import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event's Presale Info
 */
export declare class Presale extends SpeakeasyBase {
    /**
     * Description of the presale - multi-lingual fields
     */
    descriptions?: Record<string, string>;
    /**
     * Presale's end dates. The date and time when the presale will end
     */
    endDateTime?: Date;
    /**
     * Name of the presale - multi-lingual fields
     */
    names?: Record<string, string>;
    /**
     * Presale's start dates. The date and time when the presale will start
     */
    startDateTime?: Date;
    /**
     * Presale link URL
     */
    url?: string;
}
