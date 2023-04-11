import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event's Presale Info
 */
export declare class Presale extends SpeakeasyBase {
    /**
     * Description of the presame
     */
    description?: string;
    /**
     * Presale's end dates. The date and time when the presale will end
     */
    endDateTime?: Date;
    /**
     * Name of the presale
     */
    name?: string;
    /**
     * Presale's start dates. The date and time when the presale will start
     */
    startDateTime?: Date;
    /**
     * Presale link URL
     */
    url?: string;
}
